import React from 'react';
import {
  StyleSheet,
  Alert,
  NativeModules
} from 'react-native';
import {
  Container,
  Header,
  Button,
  Icon,
  Content,
  View,
  Title,
  Text,
  Input,
  InputGroup
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import colors from '../../config/colors';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;
import store from '../../redux/store';
import Login from '../../carfit/login';
import Connection from '../../carfit/connection';
import PhoneInput from 'react-native-phone-input';
// Get an instance of `PhoneNumberUtil`.
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
// Require `PhoneNumberFormat`.
var PNF = require('google-libphonenumber').PhoneNumberFormat;

const RegisterView = React.createClass({
  getInitialState() {
    return {
      first: '',
      last: ''
    };
  },

  render() {
    let headerTitle = loc.register.signin;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Title>{headerTitle}</Title>
        </Header>

        <Content style={{backgroundColor: colors.backgroundPrimary}}>
          <View style={{
            height: 1,
            backgroundColor: colors.headerTextColor,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            }}/>

          <View style={styles.inputGroup}>
            <Text style={{textAlign: 'center'}}>{loc.register.first}</Text>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='firstInput'
                placeholder={loc.register.first}
                onChangeText={(text) => this.setState({first: text})}
              />
            </InputGroup>
          </View>

          <View style={styles.inputGroup}>
            <Text style={{textAlign: 'center'}}>{loc.register.last}</Text>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='lastInput'
                placeholder={loc.register.last}
                onChangeText={(text) => this.setState({last: text})}
              />
            </InputGroup>
          </View>

          <View style={styles.inputGroup}>
            <Text style={{textAlign: 'center'}}>{loc.register.phone}</Text>
            <PhoneInput
              ref='phone'
              initialCountry='fr'
              style={{borderRadius: 24, padding: 10, backgroundColor: colors.inputBackground, borderColor: colors.primary, borderWidth: 2.5, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center'}}
            />
          </View>

          <Button rounded
            style={{alignSelf: 'center', marginTop: 10}}
            textStyle={{color: colors.textPrimary}}
            onPress={() => this.authenticate(this.state.first, this.state.last, store.getState().get("norauto").get("user_code"))}
          >{loc.general.continue}</Button>
        </Content>
      </Container>
    );
  },

  async authenticate(first, last, code) {
    var login = new Login();
    var conn = new Connection();
    // validate phone number
    if (!this.refs.phone.isValidNumber())
      Alert.alert(
        loc.login.login,
        loc.login.invalidNumber,
        [{text: 'OK', onPress: () => undefined}]
      );
    else {
      // Format the number according to E.164 rules
      var phoneNumberNonFormatted = phoneUtil.parse(this.refs.phone.getValue(), this.refs.phone.state.iso2);
      var phoneNumber = phoneUtil.format(phoneNumberNonFormatted, PNF.INTERNATIONAL);
      // set phone number
      conn.addPhone(phoneNumber);

      // user information
      var demographics = {
        firstName: first,
        lastName: last,
        phoneNumber: phoneNumber
      };

      var response = await login.norauto(code, demographics);
      if (true) {
        Alert.alert(
          loc.login.login,
          loc.login.success,
          [{text: 'OK', onPress: () => this.props.pushRoute({key: 'Installation', title: loc.welcome.welcome})}],
          {cancellable: false}
        );
      } else {
        Alert.alert(
          loc.login.login,
          loc.login.failure,
          [{text: 'OK', onPress: () => console.log("Error: login failed")}]
        );
      }
    }
  }
});

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputGroup: {
    marginTop: 20
  }
});

export default RegisterView;
