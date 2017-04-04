import React, {WebView} from 'react';
import {
  Container,
  Header,
  Button,
  Title,
  Icon,
  Content
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import colors from '../../config/colors';

const NorautoView = React.createClass({
  render() {
    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
        </Header>
        <Content style={{backgroundColor: colors.backgroundPrimary}}>
          <WebView
            source={{uri: 'http://{apiqual.norautointernational.com/uaa/oauth/authorize?response_type=code&client_id=<client_id>&redirect_uri=<localhost:port>'}}
          />
        </Content>
      </Container>
    );
  }
});

export default NorautoView;
