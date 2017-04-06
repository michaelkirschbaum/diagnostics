import React from 'react';
import {
  WebView,
  StyleSheet
 } from 'react-native';
import {
  Container,
  Header,
  Button,
  Title,
  Icon,
  Content,
  Text
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import colors from '../../config/colors';

const NorautoView = React.createClass({
  render() {
    onShouldStartLoadWithRequest = (event) => {
      console.warning(event.url);

      return false;
    };

    return (
      <WebView
        source={{uri: 'http://apiqual.norautointernational.com/uaa/oauth/authorize?response_type=code&client_id=carfit&redirect_uri=http://car.fit'}}
        style={styles.webView}
        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
      />
    );
  }
});

const styles = StyleSheet.create({
  webView: {
    backgroundColor: colors.norautoColor
  }
});

export default NorautoView;
