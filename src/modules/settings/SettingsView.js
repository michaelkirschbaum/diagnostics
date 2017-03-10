import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import {
  Container,
  Header,
  Footer,
  Title,
  Content,
  InputGroup,
  Input,
  Button,
  Icon,
  Text,
  H3,
  H2,
  H1,
  List,
  ListItem
} from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';

import * as NavigationState from '../navigation/NavigationState';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const SettingsView = React.createClass({
  propTypes: {

  },

  onNextPress() {
    // this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    // this.props.switchRoute('Overview');
    this.props.switchRoute(2);
  },

  onMyCarsPress() {
    this.props.pushRoute({key: 'MyCars', title: loc.settings.settings});
  },

  onMyAccountPress() {
    this.props.pushRoute({key: 'Account', title: loc.settings.settings});
  },

  onPrivacyPress() {
    this.props.pushRoute({key: 'Privacy', title: loc.settings.settings});
  },

  onTermsPress() {
    this.props.pushRoute({key: 'Terms', title: loc.settings.settings});
  },

  onDemoPress() {
    this.props.pushRoute({key: 'Demo', title: loc.settings.settings});
  },

  popRoute() {
    this.props.onNavigateBack();
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    headerTitle = loc.settings.settings;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{headerTitle}</Title>
        </Header>
        <View style={styles.headerLine}/>
        <Content
          padder
          keyboardShouldPersistTaps="always"
          style={{flex: 1, backgroundColor: colors.backgroundPrimary, height: windowHeight}}
          ref={c => this._content = c}>

          <View style={styles.layoutContainer}>

            <View style={styles.settingsContainer}>
              <H1 style={styles.menuText} onPress={this.onMyCarsPress}>{loc.settings.myCars}</H1>
              <H1 style={styles.menuText}>{loc.settings.sensors}</H1>
              <H1 style={styles.menuText} onPress={this.onMyAccountPress}>{loc.settings.myAccount}</H1>
              <H1 style={styles.menuText}>{loc.settings.demo}</H1>
              <H1 style={styles.menuText}>{loc.settings.useWiFi}</H1>
            </View>

            <View style={styles.settingsSubContainer}>
              <H2 style={{marginBottom: 7}} onPress={this.onTermsPress}>{loc.settings.terms}</H2>
              <H2 onPress={this.onPrivacyPress}>{loc.settings.privacy}</H2>
              <Text style={{paddingTop: 20}}>{loc.settings.copyright}</Text>
            </View>

        </View>

        </Content>
      </Container>
    );
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary
  },
  layoutContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  askMilesContainer: {
    marginTop: 22
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginTop: 22
  },
  settingsContainer: {
    flex: 1,
    flexGrow: 20,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 24
  },
  settingsSubContainer: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 8,
    marginBottom: 8,
    // backgroundColor: '#550000'
  },
  menuText: {
    marginBottom: 24,
    fontWeight: "bold"
  },

  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  footer: {
    height: 200,
    // backgroundColor: colors.backgroundPrimary,
    backgroundColor: '#550000',
    borderColor: colors.backgroundPrimary,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default SettingsView;
