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
import _ from 'lodash';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';

import * as NavigationState from '../../modules/navigation/NavigationState';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const DetailsView = React.createClass({
  propTypes: {

  },

  onNextPress() {
    // this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
    // this.props.switchRoute('Overview');
    // this.props.switchRoute(2);
  },

  popRoute() {
    this.props.onNavigateBack();
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

    let infoDetailsData = {
      year: '2015',
      make: 'Ford',
      model: 'Fiesta',
      mpgCity: 28,
      mpgHighway: 36,
      license: 'AY582RE',
      vin: 'JHRD77874C026456',
      drivenWheels: 'Front wheel drive',
      trimLevel: 'SE',
      doors: 4,
    };

    let infoDetails = _.map(_.toPairs(infoDetailsData), infoPairs => {
      let infoTitle = loc.details[infoPairs[0]] || '';
      let infoValue = infoPairs[1] || '';
      return (
        <View key={infoTitle}>
          <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17}}/>
          <View style={styles.sectionContainer}>
            <View style={styles.sectionDetails}>
              <H3 style={styles.sectionTitle}>{infoTitle}</H3>
              <Text>{infoValue}</Text>
            </View>
          </View>
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
          padder
          keyboardShouldPersistTaps="always"
          style={{flex: 1, backgroundColor: colors.backgroundPrimary, height: windowHeight}}
          ref={c => this._content = c}>

          <View style={styles.layoutContainer}>

            <View style={styles.sectionContainer}>
              <H2 style={styles.sectionHeader}>{loc.details.displayInfo}</H2>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.name}</H3>
                <Text>{name}</Text>
              </View>
              <View style={styles.sectionAction}>
                <Text> > </Text>
              </View>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.mileage}</H3>
                <Text>{mileage}</Text>
              </View>
              <View style={styles.sectionAction}>
                <Text> > </Text>
              </View>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.image}</H3>
                <Text>{image}</Text>
              </View>
              <View style={styles.sectionAction}>
                <Text> > </Text>
              </View>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>

            <View style={styles.sectionContainer}>
              <H2 style={styles.sectionHeader}>{loc.details.connectedSensors}</H2>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.carfit}</H3>
                <Text>{connected}</Text>
              </View>
              <View style={styles.sectionAction}>
                <Text> > </Text>
              </View>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>
            <View style={styles.sectionContainer}>
              <View style={styles.sectionDetails}>
                <H3 style={styles.sectionTitle}>{loc.details.phone}</H3>
                <Text>{phone}</Text>
              </View>
              <View style={styles.sectionAction}>
                <Text> > </Text>
              </View>
            </View>
            <View style={{height: 1,backgroundColor: colors.headerTextColor,marginTop: 17,marginBottom: 17,}}/>

            <View style={styles.sectionContainer}>
              <H2 style={styles.sectionHeader}>{loc.details.info}</H2>
            </View>
            {infoDetails}

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
    flexDirection: 'column',
  },
  sectionAction: {

  },
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

export default DetailsView;
