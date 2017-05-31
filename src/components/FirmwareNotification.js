import React, {Component} from 'react';
import {StyleSheet, NativeModules} from 'react-native';
import {Text, Content, View} from 'native-base';
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
      <View style={styles.container}>
        <Text style={styles.text}>{loc.device.update} {this.props.percent}%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.headerTextColor
  },
  text: {
    textAlign: 'center',
    marginBottom: 4
  }
});
