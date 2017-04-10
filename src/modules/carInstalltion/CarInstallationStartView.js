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
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;
import carfitTheme from '../../config/carfit-theme';

import * as NavigationState from '../navigation/NavigationState';

/**
 * Welcome view
 */
const CarInstallationStartView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
  },

  render() {

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Title>{loc.carInstallation.inCarInstallation}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder
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
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  header: {fontWeight: "bold", marginTop: 0},
  message: {marginTop: 2},
  container: {
    flex: 1,
    // justifyContent: 'left',
    // alignItems: 'left',
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
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
  },
  icon: {
    width: 35,
    height: 35,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titles: {

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
