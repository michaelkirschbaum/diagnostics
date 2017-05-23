import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Content} from 'native-base';
import colors from '../config/colors';
import en from '../config/localization.en';
import fr from '../config/localization.fr';

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

export default class FirmwareNotification extends Component {
  render() {
    return (
      <Content style={styles.container}>
        <Text style={styles.text}>{loc.device.update} {this.props.percent}</Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  text: {
    textAlign: 'center'
  }
});
