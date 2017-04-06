import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Content,
  View,
  Title,
  Text,
  StyleSheet
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import colors from '../../config/colors';
import loc from '../../config/localization';

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
          <Text style={{textAlign: 'center'}}>Last Name</Text>
          <Text style={{textAlign: 'center'}}>Email</Text>
          <Text style={{textAlign: 'center'}}>Phone Number</Text>
          <Button rounded
            style={{alignSelf: 'center'}}
            onPress={() => this.props.pushRoute({key: 'Welcome', title: 'loc.verification.welcome'})}
          >Continue</Button>
        </Content>
      </Container>
    );
  }
});

export default RegisterView;
