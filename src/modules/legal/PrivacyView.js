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

const PrivacyView = React.createClass({
  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.legal.privacy;

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

          <H1 style={styles.header}>{loc.privacy.privacy}</H1>
            <Text style={styles.body}>{loc.privacy.privacyBody}</Text>
          <H1 style={styles.header}>{loc.privacy.collection}</H1>
            <Text style={styles.body}>{loc.privacy.collectionBody}</Text>
          <H1 style={styles.header}>{loc.privacy.cookies}</H1>
            <Text style={styles.body}>{loc.privacy.cookiesBody}</Text>
          <H1 style={styles.header}>{loc.privacy.information}</H1>
            <Text style={styles.body}>{loc.privacy.informationBody}</Text>
          <H1 style={styles.header}>{loc.privacy.data}</H1>
            <Text style={styles.body}>{loc.privacy.dataBody}</Text>
          <H1 style={styles.header}>{loc.privacy.disclosure}</H1>
            <Text style={styles.body}>{loc.privacy.disclosureBody}</Text>
          <H1 style={styles.header}>{loc.privacy.links}</H1>
            <Text style={styles.body}>{loc.privacy.linksBody}</Text>
          <H1 style={styles.header}>{loc.privacy.access}</H1>
            <Text style={styles.body}>{loc.privacy.accessBody}</Text>
          <H1 style={styles.header}>{loc.privacy.contact}</H1>
            <Text style={styles.body}>{loc.privacy.contactBody}</Text>
          <H1 style={styles.copyright}>loc.privacy.copyright</H1>
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
    // backgroundColor: colors.backgroundPrimary,
    backgroundColor: '#550000',
    borderColor: colors.backgroundPrimary,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    textAlign: 'center'
  },
  body: {
    fontSize: responsiveFontSize(2.35)
  },
  copyright: {

  }
});

export default PrivacyView;
