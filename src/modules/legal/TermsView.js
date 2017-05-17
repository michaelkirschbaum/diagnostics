import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  NativeModules
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
import _ from 'lodash';
import colors from '../../config/colors';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const TermsView = React.createClass({
  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.settings.terms;

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
          padder={false}
          keyboardShouldPersistTaps="always"
          style={{flex: 1, backgroundColor: colors.backgroundPrimary, height: windowHeight}}
          ref={c => this._content = c}>

          <View>
	          <H1 style={styles.header}>{loc.terms.header}</H1>
            <H2 style={styles.header2}>{loc.terms.terms}</H2>
              <Text style={styles.body}>{loc.terms.termsBody}</Text>
            <H2 style={styles.header2}>{loc.terms.license}</H2>
              <Text>{loc.terms.licenseBody}</Text>
            <H2 style={styles.header2}>{loc.terms.disclaimer}</H2>
              <Text>{loc.terms.disclaimerBody}</Text>
            <H2 style={styles.header2}>{loc.terms.limitations}</H2>
              <Text>{loc.terms.limitationsBody}</Text>
            <H2 style={styles.header2}>{loc.terms.accuracy}</H2>
              <Text>{loc.terms.accuracyBody}</Text>
            <H2 style={styles.header2}>{loc.terms.link}</H2>
              <Text>{loc.terms.linkBody}</Text>
            <H2 style={styles.header2}>{loc.terms.modifications}</H2>
              <Text>{loc.terms.modificationsBody}</Text>
            <H2 style={styles.header2}>{loc.terms.law}</H2>
              <Text>{loc.terms.lawBody}</Text>
            <H2 style={styles.header2}>{loc.terms.privacy}</H2>
              <Text>{loc.terms.privacyBody}</Text>
            <H1>{loc.terms.copyright}</H1>
          </View>
        </Content>
      </Container>
    );
  },

  popRoute() {
    this.props.onNavigateBack();
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
    marginTop: 4
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  sectionDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionAction: {},
  sectionHeader: {
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginTop: 22
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
    backgroundColor: '#550000',
    borderColor: colors.backgroundPrimary,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    textAlign: 'center'
  },
  header2: {

  },
  body: {
    fontSize: responsiveFontSize(2.35)
  },
  copyright: {

  }
});

export default TermsView;
