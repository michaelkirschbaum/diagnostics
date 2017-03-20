import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
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
import Vehicle from '../../carfit/vehicle';
import store from '../../redux/store';
import createFragment from 'react-addons-create-fragment';

const HomeView = React.createClass({
  getInitialState() {
    return {
      alerts: ''
    };
  },

  propTypes: {},

  onNextPress() {
    // this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    // this.props.switchRoute('Overview');
    // this.props.switchRoute(2);
  },

  onSettingsPress() {
    this.props.pushRoute({key: 'Settings', title: loc.settings.settings});
  },

  onMilesPress() {
    // this.props.pushRoute({key: 'Miles', title: loc.settings.settings});
  },

  onMyCarsPress() {
    this.props.pushRoute({key: 'Details', title: loc.settings.settings});
  },

  popRoute() {
    this.props.onNavigateBack();
  },

  componentDidMount() {
    this.getAlerts().done();
  },

  async getAlerts() {
    const vin = store.getState().get("carInstallation").get("vin");

    var vehicle = new Vehicle();
    var alerts = await vehicle.getAlerts(vin);

    alerts = Object.entries(alerts).map(([key, val], i) => {
      return <Text key={'key-'+ i}>{key +': '+ val}</Text>;
    });

    this.setState({alerts});
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let alertAction = loc.home.serviceNeeded;

    let alertDescription = this.state.alerts;
    let alertColor = colors.secondary;

    let usageAction = loc.home.lastTrip;
    let usageDescription = '5.1 km';
    let actionColor = colors.primary;

    let valueAction = loc.home.trending;
    let valueDescription = loc.home.comingSoon;

    return (
      <Container theme={carfitTheme}>
        <View style={styles.headerLine}/>
        <Content
          padder
          keyboardShouldPersistTaps="always"
          style={{backgroundColor: colors.backgroundPrimary}}
          ref={c => this._content = c}>

          <View style={styles.container}>

            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={this.onSettingsPress}>
                <Image source={require('../../../images/icons/settings.png')}
                       style={styles.icon}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onMyCarsPress}>
                <Text>Image</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onMilesPress}>
                <Image source={require('../../../images/icons/miles.png')} style={styles.icon}/>
              </TouchableOpacity>
            </View>

            <View style={styles.profileHeaderContainer}>
              <H1>Car Title</H1>
              <H2 style={{marginTop: 5}}>Car Description</H2>
              <Button rounded
                      style={styles.milesButton}
                      textStyle={{color: colors.textPrimary}}
                      onPress={this.onNextPress}
              >00,000km</Button>
            </View>

            <View style={{
              height: 1,
              backgroundColor: colors.headerTextColor,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 5,
              marginBottom: 5,
              }}/>

            <View style={styles.dataBlockContainer}>
              <View style={styles.dataIcon}>
                <Image source={require('../../../images/icons/service.png')} style={styles.icon}/>
              </View>
              <View style={styles.dataBlock}>
                <H3 style={{fontWeight: "bold", color: alertColor}}>{loc.home.alert}</H3>
                <View style={{ height: 1, backgroundColor: colors.headerTextColor, marginTop: 2, marginBottom: 2}}/>
                <H3>{alertAction}</H3>
                <Text>{alertDescription}</Text>
              </View>
              <View style={styles.dataAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View>
            </View>

            <View style={styles.dataBlockContainer}>
              <View style={styles.dataIcon}>
                <Image source={require('../../../images/icons/usage.png')} style={styles.icon}/>
              </View>
              <View style={styles.dataBlock}>
                <H3 style={{fontWeight: "bold", color: actionColor}}>{loc.home.usage}</H3>
                <View style={{ height: 1, backgroundColor: colors.headerTextColor, marginTop: 2, marginBottom: 2}}/>
                <H3>{usageAction}</H3>
                <Text>{usageDescription}</Text>
              </View>
              <View style={styles.dataAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View>
            </View>

            <View style={styles.dataBlockContainer}>
              <View style={styles.dataIcon}>
                <Image source={require('../../../images/icons/usage.png')} style={styles.icon}/>
              </View>
              <View style={styles.dataBlock}>
                <H3 style={{fontWeight: "bold", color: colors.headerTextColor}}>{loc.home.value}</H3>
                <View style={{ height: 1, backgroundColor: colors.headerTextColor, marginTop: 2, marginBottom: 2}}/>
                <H3 style={{color: colors.headerTextColor}}>{valueAction}</H3>
                <Text style={{color: colors.headerTextColor}}>{valueDescription}</Text>
              </View>
              <View style={styles.dataAction}>
                <Icon active name="ios-arrow-forward"></Icon>
              </View>
            </View>

          </View>

        </Content>
        <Footer theme={carfitTheme} style={styles.footer}>
          <View style={styles.bottomContainer}>
            <Button rounded
                    bordered={false}
                    style={{alignSelf: 'auto', width: 120, height: 45}}
                    textStyle={{color: colors.textPrimary}}
                    onPress={this.onNextPress}>
              <Image source={require('../../../images/icons/phone.png')} style={styles.icon}/>
            </Button>
          </View>
        </Footer>
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
    // height: 300,
    marginLeft: 20,
    marginRight: 20,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
    // backgroundColor: '#002200',
    marginBottom: 16,
  },
  profileHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#220000',
    marginBottom: 16,
  },
  milesButton: {
    backgroundColor: colors.textSecondary,
    alignSelf: 'auto',
    marginTop: 16,
  },

  dataBlockContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16
  },
  dataIcon: {
    marginRight: 16
  },
  dataBlock: {
    flex: 1,
  },
  dataAction: {
    marginLeft: 16,
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
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  icon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  footer: {
    height: 90,
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeView;
