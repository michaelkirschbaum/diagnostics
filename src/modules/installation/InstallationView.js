import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import { Container, Header, Title, Content, InputGroup, Input, Button, Icon, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';

import * as NavigationState from '../../modules/navigation/NavigationState';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const InstallationView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Verification',
      title: 'Verification'
    }));
  },

  popRoute() {
    this.props.onNavigateBack();
  },

  render() {
    let windowHeight = Dimensions.get('window').height;

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" />
            </Button>
            <Title>{loc.welcome.welcome}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <Swiper
              loop={false}
              height={windowHeight - 100}
              style={styles.container}
              dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            >
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/pull-tab-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.enableBattery}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.pullTab}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/activate-ble-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.activateBluetooth}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.turnOnBLE}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/reset-connection-01.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.resetConnection}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.pressAndHold}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/ble-pairing-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.blePairing}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.ensurePairing}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text>Instructions 5</Text>
              </View>
            </Swiper>

          </Content>
        </Container>
    );
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  container: {
    height: 300,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
  },
  instructionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  bottomContainer: {
    flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default InstallationView;
