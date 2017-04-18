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

const RegisterView = React.createClass({
  getInitialState() {
    return {
      first: '',
      last: '',
      phone: ''
    };
  },

  async authenticate(first, last, phone, code) {
    var login = new Login();

    // user information
    var demographics = {
      firstName: first,
      lastName: last,
      phoneNumber: phone
    };

    var response = await login.norauto(code, demographics);
    if (true) {
      Alert.alert(
        'Login',
        'You are now logged in.',
        [{text: 'OK', onPress: () => this.props.pushRoute({key: 'Welcome', title: loc.verification.welcome})}],
        {cancellable: false}
      );
    } else {
      Alert.alert(
        'Login',
        'Log in failed. Try again.',
        [{text: 'OK', onPress: () => console.log("Error: login failed")}]
      );
    }
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
            <Text style={{textAlign: 'center'}}>First Name</Text>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='firstInput'
                placeholder={loc.register.first}
                onChangeText={(text) => this.setState({first: text})}
              />
            </InputGroup>
          </View>

          <View style={styles.inputGroup}>
            <Text style={{textAlign: 'center'}}>Last Name</Text>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='lastInput'
                placeholder={loc.register.last}
                onChangeText={(text) => this.setState({last: text})}
              />
            </InputGroup>
          </View>

          <View style={styles.inputGroup}>
            <Text style={{textAlign: 'center'}}>Phone number</Text>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='phoneInput'
                placeholder={loc.register.phone}
                onChangeText={(text) => this.setState({phone: text})}
              />
            </InputGroup>
          </View>

          <Button rounded
            style={{alignSelf: 'center', marginTop: 10}}
            textStyle={{color: colors.textPrimary}}
            onPress={() => this.authenticate(this.state.first, this.state.last, this.state.phone, store.getState().get("norauto").get("user_code"))}
          >{loc.general.continue}</Button>
        </Content>
      </Container>
    );
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
  }
});

export default RegisterView;
