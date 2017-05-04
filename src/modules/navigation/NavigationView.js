import React, {PropTypes} from 'react';
import {
  Platform,
  NavigationExperimental,
  View,
  StatusBar,
  StyleSheet,
  NativeEventEmitter,
  NativeModules,
  Alert
} from 'react-native';
const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;
import AppRouter from '../AppRouter';
import {Drawer, Content, Text, List, ListItem} from 'native-base';
import NavigationDemoDrawer from './NavigationDemoDrawer';
const {CarFitManager} = NativeModules;
import stylesMain from '../../config/styles';

// const styles = stylesMain;

// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 30;

const NavigationView = React.createClass({
  propTypes: {
    onNavigateBack: PropTypes.func.isRequired, // Calls popRoute
    onNavigateCompleted: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired,
    switchRoute: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
  },
  closeDrawer() {
    if (this.props.navigationState.drawerOpen === true) {
      this.props.closeDrawer();
    }
  },
  renderScene(sceneProps) {
    // render scene and apply padding to cover
    // for app bar and navigation bar
    return (
      <View style={styles.sceneContainer}>
        {AppRouter(sceneProps)}
      </View>
    );
  },
  render() {
    // Pulls out the roots
    const {roots} = this.props.navigationState;
    // Gets the current root by index
    const rootKey = roots.routes[roots.index].key;
    // Then grabs the current scene
    const scenes = this.props.navigationState[rootKey];

    return (
      <Drawer
        open={this.props.navigationState.drawerOpen}
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<NavigationDemoDrawer/>}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
          backgroundColor='gray'
        />
        <NavigationCardStack
          key={'stack_' + rootKey}
          onNavigateBack={this.props.onNavigateBack}
          navigationState={scenes}
          renderScene={this.renderScene}
        />
      </Drawer>
    );

    // return (
    //   <View style={styles.container}>
    //     <StatusBar
    //       barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
    //       backgroundColor='gray'
    //     />
    //     <NavigationCardStack
    //       key={'stack_' + rootKey}
    //       onNavigateBack={this.props.onNavigateBack}
    //       navigationState={scenes}
    //       renderScene={this.renderScene}
    //     />
    //   </View>
    // );
  },

  componentWillMount() {
    var connectionEmitter = new NativeEventEmitter(CarFitManager);

    // set flag for start of trip
    var trip_subscription = connectionEmitter.addListener(
      'TripStartOfTravel',
      (notification) => this.props.setDrive(true)
    );

    // set flag for end of trip
    var trip_subscription = connectionEmitter.addListener(
      'TripEndOfTravel',
      (notification) => this.props.setDrive(false)
    );

    // flag bluetooth connection status
    var connection_subscription = connectionEmitter.addListener(
      'BLEDeviceConnectionStatus',
      (message) => this.props.setConnection(message["status"])
    );

    if (this.locationFrance())
      // listen for support click
      var support_subscription = connectionEmitter.addListener(
        'BLEButtonPress',
        (reminder) => Alert.alert(
          'Support',
          loc.home.call,
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        )
      );
  },

  locationFrance() {
    if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
      return true;
    else
      return false;
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    // marginBottom: TAB_BAR_HEIGHT
  }
});

export default NavigationView;
