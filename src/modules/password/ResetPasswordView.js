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
 * Verification view
 */
const ResetPasswordView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'MainScreen',
      title: 'CarFit'
    }));
  },

  render() {

    const index = this.props.index;
    const emailPlaceholder = 'email@carfit.com';

    return (
        <Container>
          <Content
            padder
            keyboardShouldPersistTaps="always"
            theme={carfitTheme}
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <View style={styles.container}>
              <Text>{loc.resetPassword.instructions3}</Text>
            </View>

            <View style={styles.inputContainer}>
              <H3 style={styles.titles}>{loc.resetPassword.newPassword}</H3>
              <InputGroup borderType='rounded' style={styles.textInput}>
                <Input
                  placeholder='Enter new password'
                  onSubmitEditing={(event) => {
                    this.refs.PasswordInput._textInput.focus();
                  }}/>
              </InputGroup>
              <H3 style={styles.titles}>{loc.resetPassword.retypePassword}</H3>
              <InputGroup borderType='rounded' style={styles.textInput}>
                <Input
                  placeholder='Repeat new password'
                  onSubmitEditing={(event) => {
                    this.refs.PasswordInput._textInput.focus();
                  }}/>
              </InputGroup>
            </View>

            <View style={styles.bottomContainer}>
              <Text style={{marginBottom: 12, color: colors.secondary}}>{loc.resetPassword.incorrect}</Text>
              <Button rounded style={{alignSelf: 'auto'}} textStyle={{color: colors.textPrimary}}>{loc.general.continue}</Button>
            </View>

          </Content>
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
    marginRight: 20,
    height: 200
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
  bottomContainer: {
    flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ResetPasswordView;
