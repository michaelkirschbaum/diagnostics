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
import {responsiveFontSize} from 'react-native-responsive-dimensions';

/**
 * Welcome view
 */
const WelcomeView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.pushRoute({key: 'Installation', title: loc.welcome.welcome});
  },

  render() {

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Title>{loc.welcome.welcome}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder={false}
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <View style={styles.container}>
              <Text style={{fontSize: responsiveFontSize(2.35)}}>{loc.welcome.welcomeToCarfit}</Text>
              <Text style={styles.textBody}>{loc.welcome.helloMiles}</Text>
              <Text style={styles.textBody}>{loc.welcome.welcomeParagraph1}</Text>
              <Text style={styles.textBody}>{loc.welcome.welcomeParagraph2}</Text>
              <Text style={styles.textBody}>{loc.welcome.welcomeParagraph3}</Text>
              <Text style={styles.textBody}>{loc.welcome.welcomeParagraph4}</Text>

              <Text style={styles.textBody}>
                <Text style={styles.textBold}>1. {loc.welcome.step1}</Text>
                <Text style={{fontSize: responsiveFontSize(2.35)}}>{loc.welcome.stepDescription1}</Text>
              </Text>
              <Text style={{marginTop: 3, fontSize: responsiveFontSize(2.35)}}>
                <Text style={styles.textBold}>2. {loc.welcome.step2}</Text>
                <Text style={{fontSize: responsiveFontSize(2.35)}}>{loc.welcome.stepDescription1}</Text>
              </Text>
              <Text style={{marginTop: 3, fontSize: responsiveFontSize(2.35)}}>
                <Text style={styles.textBold}>3. {loc.welcome.step3}</Text>
                <Text style={{fontSize: responsiveFontSize(2.35)}}>{loc.welcome.stepDescription2}</Text>
              </Text>
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
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
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
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  footer: {
    height: 100,
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBody: {
    marginTop: 12,
    fontSize: responsiveFontSize(2.35)
  },
  textBold: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.35)
  }
});

export default WelcomeView;
