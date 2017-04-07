import React from 'react';
import {StyleSheet} from 'react-native';
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
import loc from '../../config/localization';
import store from '../../redux/store';

const RegisterView = React.createClass({
  render() {
    let headerTitle = loc.register.signin;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{headerTitle}</Title>
        </Header>
        <Content style={{backgroundColor: colors.backgroundPrimary}}>
          <Text style={{textAlign: 'center'}}>First Name</Text>
          <InputGroup borderType='rounded' style={styles.textInput}>
            <Input
              ref='firstInput'
              placeholder={loc.register.first}
              onChangeText = {(text) => this.setState({text: first})}
            />
          </InputGroup>
          <Text style={{textAlign: 'center'}}>Last Name</Text>
          <InputGroup borderType='rounded' style={styles.textInput}>
            <Input
              ref='lastInput'
              placeholder={loc.register.last}
              onChangeText = {(text) => this.setState({text: last})}
            />
          </InputGroup>
          <Text style={{textAlign: 'center'}}>Email</Text>
          <InputGroup borderType='rounded' style={styles.textInput}>
            <Input
              ref='emailInput'
              placeholder={loc.register.email}
              onChangeText = {(text) => this.setState({text: email})}
            />
          </InputGroup>
          <Text style={{textAlign: 'center'}}>Phone number</Text>
          <InputGroup borderType='rounded' style={styles.textInput}>
            <Input
              ref='phoneInput'
              placeholder={loc.register.phone}
              onChangeText = {(text) => this.setState({text: phone})}
            />
          </InputGroup>
          <Button rounded
            style={{alignSelf: 'center'}}
            onPress={() => this.authenticate(this.state.first, this.state.last, this.state.email, this.state.phone, store.getState().get('norauto').get('code'))}
          >{loc.general.continue}</Button>
        </Content>
      </Container>
    );
  },

  getInitialState: function() {
    return {
      first: '',
      last: '',
      phone: '',
      email: ''
    };
  },

  authenticate(first, last, email, phone, code) {
    // route to welcome view
    this.props.pushRoute({key: 'Welcome', title: 'loc.verification.welcome'})
  }
});

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginTop: 22
  }
});

export default RegisterView;
