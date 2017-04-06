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
import URL from 'url-parse';
import Login from '../../carfit/login';

const NorautoView = React.createClass({
  onShouldStartLoadWithRequest(event) {
    // scan for specified redirect
    var url = new URL(event.url);

    // get 'short code' from response
    if (url.hostname == 'car.fit') {
      var query = url.query;
      var code = query.substr(query.indexOf("=") + 1, query.length - 1);

      // store short code
      this.changeUserCode(code);

      // route to welcome
      this.props.pushRoute({key: 'Register', title: loc.verification.welcome});

      // prevent browser from navigating
      return false;
    }

    // navigate to url
    return true;
  },

  render() {
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
