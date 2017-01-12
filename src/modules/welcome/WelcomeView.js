import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Content, Footer, InputGroup, Input, Button, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';

import * as NavigationState from '../../modules/navigation/NavigationState';

/**
 * Welcome view
 */
const WelcomeView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Installation',
      title: 'Installation'
    }));
  },

  render() {

    return (
        <Container>
          <Content
            padder
            keyboardShouldPersistTaps="always"
            theme={carfitTheme}
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <View style={styles.container}>
              <Text>{loc.welcome.welcomeToCarfit}</Text>
              <Text style={{marginTop: 12}}>{loc.welcome.helloMiles}</Text>
              <Text style={{marginTop: 12}}>{loc.welcome.welcomeParagraph1}</Text>
              <Text style={{marginTop: 12}}>{loc.welcome.welcomeParagraph2}</Text>
              <Text style={{marginTop: 12}}>{loc.welcome.welcomeParagraph3}</Text>
              <Text style={{marginTop: 12}}>{loc.welcome.welcomeParagraph4}</Text>

              <Text style={{marginTop: 12}}>
                <Text style={{fontWeight: "bold"}}>1. {loc.welcome.step1}</Text>
                <Text>{loc.welcome.stepDescription1}</Text>
              </Text>
              <Text style={{marginTop: 3}}>
                <Text style={{fontWeight: "bold"}}>2. {loc.welcome.step2}</Text>
                <Text>{loc.welcome.stepDescription1}</Text>
              </Text>
              <Text style={{marginTop: 3}}>
                <Text style={{fontWeight: "bold"}}>3. {loc.welcome.step3}</Text>
                <Text>{loc.welcome.stepDescription2}</Text>
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
  container: {
    flex: 1,
    // justifyContent: 'left',
    // alignItems: 'left',
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
    height: 150,
    backgroundColor: colors.backgroundPrimary
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default WelcomeView;
