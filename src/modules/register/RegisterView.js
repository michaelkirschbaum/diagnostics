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

          <View style={styles.container}>
            <PhoneInput ref='phone' />
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

  async authenticate(first, last, phone, code) {
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
      // set phone number
      conn.addPhone(this.refs.phone.getValue());

      // user information
      var demographics = {
        firstName: first,
        lastName: last,
        phoneNumber: this.refs.phone.getValue()
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
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputGroup: {
    marginTop: 20
  },
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 10,
    marginLeft: 20,
    marginRight: 20
  }
});

export default RegisterView;
