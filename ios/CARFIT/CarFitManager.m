//
//  CarFitManager.m
//  CARFIT
//
//  Created by Chris McClenaghan on 1/17/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "CarFitManager.h"
#import <React/RCTlog.h>
#import <AWSCore/AWSCore.h>

@implementation CarFitManager

- (instancetype) init {
  self = [super init];
  if (self) {
    NSLog(@"%s - init success\n", __FUNCTION__);
    [self start];
  };
  return self;
}

- (NSString *) VIN {
  return [[CFPCore sharedInstance] VIN];
}

- (void) setPhone:(NSString *)phone {
  [[CFPCore sharedInstance] setPhone:phone];
}

- (void) start {
  [[CFPCore sharedInstance] start];
  [[CFPCore sharedInstance] bleScanForDevices];
}

#pragma Upload Counters API Gateway/S3

- (NSDictionary *) getUploadCounters {
  return [[CFPCore sharedInstance] getUploadCounters];
}

#pragma React Native Bridge

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(availableBLEDevicesAsync,
                 availableBLEDevicesResolver:(RCTPromiseResolveBlock)resolve
                 availableBLEDevicesRejecter:(RCTPromiseRejectBlock)reject)
{
#if TARGET_OS_SIMULATOR
  NSArray * devices = @[@{@"name": @"CARFIT", @"identifier": @"129AB20934" , @"signal": @"-40"}];
#else
  NSArray * devices = [[CFPCore sharedInstance] bleDiscoveredDevices];
#endif

  resolve(devices);
}

RCT_EXPORT_METHOD(connectBLEDeviceAsync:(NSString *) identifier
                 connectBLEDeviceResolver:(RCTPromiseResolveBlock)resolve
                 connectBLEDeviceRejecter:(RCTPromiseRejectBlock)reject)
{
  [[CFPCore sharedInstance] bleConnectToDeviceWithId:identifier];
  resolve(nil);
}

RCT_EXPORT_METHOD(onBoardVehicleWithPlate:(NSString *) licensePlate
                  plateRegion:(NSString *) region
                  vinLastSix:(NSString *) lastSix
                  connectBLEDeviceResolver:(RCTPromiseResolveBlock)resolve
                  connectBLEDeviceRejecter:(RCTPromiseRejectBlock)reject)
{
  [[[CFPCore sharedInstance] onBoardVehicleWithPlate:licensePlate plateRegion:region vinLastSix:lastSix] continueWithBlock:^id _Nullable(AWSTask * _Nonnull task) {
    if (task.error) {
      reject(@"onBoarding", task.error.localizedDescription, task.error);
    } else {
      resolve (task.result);
    }
    return nil;
  }];
}

RCT_EXPORT_METHOD(onBoardVehicleWithVIN:(NSString *) vin
                  connectBLEDeviceResolver:(RCTPromiseResolveBlock)resolve
                  connectBLEDeviceRejecter:(RCTPromiseRejectBlock)reject)
{
  [[[CFPCore sharedInstance] onBoardVehicleWithVIN:vin] continueWithBlock:^id _Nullable(AWSTask * _Nonnull task) {
    if (task.error) {
      reject(@"onBoarding", task.error.localizedDescription, task.error);
    } else {
      resolve (task.result);
    }
    return nil;
  }];
}

RCT_EXPORT_METHOD(authenticate:(NSString *) domain withToken:(NSString *) token
                  authenticateLockResolver:(RCTPromiseResolveBlock)resolve
                  authenticateLockRejecter:(RCTPromiseRejectBlock)reject)
{
  [[CFPCore sharedInstance] authenticate:domain withToken:token];
  resolve(nil);
}

// RCT_EXPOSE_METHOD(vehiclestatus) {}

// RCT_EXPORT_METHOD(updatedistance) {}

RCT_REMAP_METHOD(clickButton,
                 clickButtonResolver:(RCTPromiseResolveBlock)resolve
                 clickButtonRejecter:(RCTPromiseRejectBlock)reject) {}

// RCT_REMAP_METHOD(isAuthenticated) {}
@end
