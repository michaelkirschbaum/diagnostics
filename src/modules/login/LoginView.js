import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Content, InputGroup, Input, Button, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';

import * as NavigationState from '../../modules/navigation/NavigationState';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const LoginView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Verification',
      title: 'Verification'
    }));
  },

  onPasswordPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'ResetPasswordCode',
      title: 'Reset Password'
    }));
  },

  render() {

    const index = this.props.index;
    return (
        <Container>
          <Content
            padder
            keyboardShouldPersistTaps="always"
            theme={carfitTheme}
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>
            <View style={styles.container}>
              <Image source={require('../../../images/carfit-logo-black-bg.png')} style={styles.logo}/>
            </View>
            <View style={styles.inputContainer}>
              <H3 style={styles.titles}>{loc.login.email}</H3>
              <InputGroup borderType='rounded' style={styles.textInput}>
                <Input
                  placeholder='Email Address'
                  onSubmitEditing={(event) => {
                    this.refs.PasswordInput._textInput.focus();
                  }}/>
              </InputGroup>
              <H3 style={styles.titles}>{loc.login.password}</H3>
              <InputGroup borderType='rounded' style={styles.textInput}>
                <Input
                  ref='PasswordInput'
                  placeholder='Password'/>
              </InputGroup>
              <View style={styles.bottomContainer}>
                <Text style={{marginBottom: 12}} onPress={this.onPasswordPress}>{loc.login.forgotPassword}</Text>
                <Button rounded
                        style={{alignSelf: 'auto'}}
                        textStyle={{color: colors.textPrimary}}
                        onPress={this.onNextPress}
                >{loc.general.continue}</Button>
              </View>
            </View>
          </Content>
        </Container>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
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
  bottomContainer: {
    flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginView;
