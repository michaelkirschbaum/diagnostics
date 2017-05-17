import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  NativeModules
} from 'react-native';
import { Container, Header, Title, Content, Footer, InputGroup, Input, Button, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
import carfitTheme from '../../config/carfit-theme';
import * as NavigationState from '../navigation/NavigationState';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const CarInstallationStartView = React.createClass({
  render() {
    return (
        <Container theme={carfitTheme}>
          <Header>
            <Title>{loc.carInstallation.inCarInstallation}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder={false}
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <View style={styles.container}>
              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/car.png')} style={styles.icon}/>
                <View>
                  <H3 style={styles.header}>{loc.carInstallation.header1}</H3>
                  <Text style={styles.message}>{loc.carInstallation.message1}</Text>
                </View>
              </View>

              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/adhesive.png')} style={styles.icon}/>
                <View>
              <H3 style={styles.header}>{loc.carInstallation.header2}</H3>
              <Text style={styles.message}>{loc.carInstallation.message2}</Text>
                </View>
              </View>

              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/position.png')} style={styles.icon}/>
                <View>
              <H3 style={styles.header}>{loc.carInstallation.header3}</H3>
              <Text style={styles.message}>{loc.carInstallation.message3}</Text>
                </View>
              </View>

              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/register.png')} style={styles.icon}/>
                <View>
              <H3 style={styles.header}>{loc.carInstallation.header4}</H3>
              <Text style={styles.message}>{loc.carInstallation.message4}</Text>
                </View>
              </View>

              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/check.png')} style={styles.icon}/>
                <View>
              <H3 style={styles.header}>{loc.carInstallation.header5}</H3>
              <Text style={styles.message}>{loc.carInstallation.message5}</Text>
                </View>
              </View>

            </View>

          </Content>
          <Footer theme={carfitTheme} style={styles.footer}>
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary}}
                      onPress={this.onNextPress}
              >{loc.general.continue}</Button>
            </View>
          </Footer>
        </Container>
    );
  },

  onNextPress() {
    this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  header: {fontWeight: "bold", marginTop: 0},
  message: {marginTop: 2, fontSize: responsiveFontSize(2.35)},
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 8
  },
  icon: {
    width: 35,
    height: 35,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: 150,
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CarInstallationStartView;
