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
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';
import Login from '../../carfit/login'

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const AccountView = React.createClass({
  getInitialState() {
    return {
      userID: ''
    };
  },

  componentDidMount() {
    this.getUserID().done();
  },

  onNextPress() {
    // this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    // this.props.switchRoute('Overview');
    // this.props.switchRoute(2);
  },

  popRoute() {
    this.props.onNavigateBack();
  },

  async getUserID() {
    var login = new Login();
    var userID = await login.getUser();

    this.setState({userID});
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.myCars.myCars;

    let name = "Sam's Car";
    let mileage = "10,345 km";
    let image = "PICTURE";

    let connected = "Connected";
    let phone = "Sam's iPhone 6";

    let accountDetailsData = {
      identifier: this.state.userID
    };

    let accountDetails = _.map(_.toPairs(accountDetailsData), infoPairs => {
      let infoTitle = loc.account[infoPairs[0]] || '';
      let infoValue = infoPairs[1] || '';
      return (
        <View key={infoTitle}>
          <View style={styles.sectionContainer}>
            <View style={styles.sectionDetails}>
              <H3 style={styles.sectionTitle}>{infoTitle}</H3>
              <Text>{infoValue}</Text>
            </View>
          </View>
          <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17}}/>
        </View>
      )

    });

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

          <View style={styles.layoutContainer}>

            {accountDetails}
{/*
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.account.password}</H3>
                <Text>{loc.account.changePassword}</Text>
              </View>
              <View style={styles.sectionAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View>
            </View>
*/}
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
    flexDirection: 'row',
    justifyContent: 'space-between'
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
});

export default AccountView;
