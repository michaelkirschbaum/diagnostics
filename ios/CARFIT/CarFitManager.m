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

@interface CarFitManager () <CFPCoreBLEDelegate>
@property RCTPromiseResolveBlock connectBLEDeviceAsyncResolveBlock;
@property RCTPromiseRejectBlock connectBLEDeviceAsyncRejectBlock;
@end

@implementation CarFitManager
{
  BOOL hasRCTListeners;
}

- (instancetype) init {
  self = [super init];
  if (self) {
    NSLog(@"%s - init success\n", __FUNCTION__);
    [[CFPCore sharedInstance] setBLEDelegate:self];
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
}

- (void) didFailToConnectDevice:(NSError *) error {
  if (self.connectBLEDeviceAsyncRejectBlock) {
    self.connectBLEDeviceAsyncRejectBlock(@"error", @"error", error);
    self.connectBLEDeviceAsyncRejectBlock = nil;
  }
}

- (void) didConnectDevice {
  if (self.connectBLEDeviceAsyncResolveBlock) {
    self.connectBLEDeviceAsyncResolveBlock(nil);
    self.connectBLEDeviceAsyncResolveBlock = nil;
  }
}

- (void) didDisconnectDevice {
  // use event propagation to notify
  NSLog(@"%s - and hasRCTListeners is: %@", __FUNCTION__, hasRCTListeners ? @"YES" : @"NO");
  if (hasRCTListeners) {
    [self sendEventWithName:@"BLEDeviceDisconnect" body:@{@"name": @"BLEDeviceDisconnect"}];
  }
}

- (void) didDiscoverDevice {
  // use event propagation to notify
  NSLog(@"%s", __FUNCTION__);
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
  self.connectBLEDeviceAsyncResolveBlock = resolve;
  self.connectBLEDeviceAsyncRejectBlock = reject;
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

RCT_REMAP_METHOD(authenticateAuth0, authenticate:(NSString *) domain withToken:(NSString *) token
                  authenticateLockResolver:(RCTPromiseResolveBlock)resolve
                  authenticateLockRejecter:(RCTPromiseRejectBlock)reject)
{
  [[[CFPCore sharedInstance] authenticate:domain withToken:token] continueWithBlock:^id _Nullable(AWSTask * _Nonnull task) {
    if (task.error) {
      reject(@"authentication", task.error.localizedDescription, task.error);
    } else {
      resolve(task.result);
    }
    return nil;
  }];
}

RCT_REMAP_METHOD(authenticateNorauto, authenticate:(NSString *) code demographics:(NSDictionary *) demographics
                 authenticateLockResolver:(RCTPromiseResolveBlock)resolve
                 authenticateLockRejecter:(RCTPromiseRejectBlock)reject)
{
  [[[CFPCore sharedInstance] authenticate:code demographics:demographics] continueWithBlock:^id _Nullable(AWSTask * _Nonnull task) {
    if (task.error) {
      reject(@"authentication", task.error.localizedDescription, task.error);
    } else {
      resolve(task.result);
    }
    return nil;
  }];
}

RCT_EXPORT_METHOD(scheduledServiceItemsFor:(NSString *) vin
                  scheduledServiceItemsForResolver:(RCTPromiseResolveBlock) resolve
                  scheduledServiceItemsForRejecter:(RCTPromiseRejectBlock) reject)
{

  resolve(@"[\
           {\
             \"interval_items\": [\
                                {\
                                  \"status\": \"incomplete\",\
                                  \"scheduled_meters\": 112651000,\
                                  \"summary\": \"Change - Engine oil\",\
                                  \"backlog_id\": 48827,\
                                  \"created_on\": \"2017-01-27T00:01:37.052469+00:00\",\
                                  \"action_type\": \"maintenance\"\
                                },\
                                {\
                                  \"status\": \"incomplete\",\
                                  \"scheduled_meters\": 112651000,\
                                  \"summary\": \"Rotate/adjust air pressure - Wheels & tires\",\
                                  \"backlog_id\": 48889,\
                                  \"created_on\": \"2017-01-27T00:01:37.052469+00:00\",\
                                  \"action_type\": \"maintenance\"\
                                },\
                                {\
                                  \"status\": \"incomplete\",\
                                  \"scheduled_meters\": 111933397,\
                                  \"summary\": \"RECALL: AIR BAGS PROBLEM. Manufacturer Recall ID: 17V030000.\",\
                                  \"backlog_id\": 59054,\
                                  \"created_on\": \"2017-02-13T00:01:44.792429+00:00\",\
                                  \"action_type\": \"maintenance\"\
                                }\
                                ],\
             \"interval_meters\": 111933397\
           },\
           {\
             \"interval_items\": [],\
             \"interval_meters\": 113542397\
           }\
           ]");
}

RCT_EXPORT_METHOD(vehicleBacklog:(NSString *) vin backlogType:(NSString *) backlogType
                  scheduledServiceItemsForResolver:(RCTPromiseResolveBlock) resolve
                  scheduledServiceItemsForRejecter:(RCTPromiseRejectBlock) reject)
{
  resolve(@"[\
           {\
             \"status\": \"incomplete\",\
             \"scheduled_meters\": 111933397,\
             \"summary\": \"RECALL: AIR BAGS PROBLEM. Manufacturer Recall ID: 16V346000.\",\
             \"backlog_id\": 48819,\
             \"created_on\": \"2017-01-27T00:01:36.527379+00:00\",\
             \"action_type\": \"recall\"\
           },\
           {\
             \"status\": \"incomplete\",\
             \"scheduled_meters\": 111933397,\
             \"summary\": \"RECALL: AIR BAGS PROBLEM. Manufacturer RECALL ID: 16V061000.\",\
             \"backlog_id\": 42031,\
             \"created_on\": \"2016-10-18T22:59:34.506221+00:00\",\
             \"action_type\": \"recall\"\
           }\
           ]");
}

RCT_REMAP_METHOD(clickButton,
                 clickButtonResolver:(RCTPromiseResolveBlock)resolve
                 clickButtonRejecter:(RCTPromiseRejectBlock)reject)
{
  [[CFPCore sharedInstance] simulatePushButton];
  resolve(nil);
}

// RCT_EXPORT_METHOD(updateDistance) {}

// RCT_REMAP_METHOD(isAuthenticated) {}

#pragma RCTEventEmitter

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"BLEDeviceDisconnect"];
}

// Will be called when this module's first listener is added.
-(void)startObserving {
  hasRCTListeners = YES;
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  hasRCTListeners = NO;
}


@end
