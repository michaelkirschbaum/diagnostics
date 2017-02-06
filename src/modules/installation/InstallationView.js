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
  Title,
  Content,
  InputGroup,
  Input,
  Button,
  Icon,
  Text,
  H3,
  List,
  ListItem
} from 'native-base';
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
const InstallationView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired
    installation: PropTypes.object.isRequired
  },

  onNextPress() {
    this.props.pushRoute({key: 'CarStartInstallation', title: loc.carInstallation.inCarInstallation});
  },

  popRoute() {
    this.props.setPageIndex(0);
    this.props.clearDevices();
    this.props.onNavigateBack();
  },

  setPage(index) {
    this.props.setPageIndex(index);
    if (index == 4) {
      // Start discovery of BLE devices
      this.props.discover();
    }
  },

  componentWillUpdate(nextProps, nextState) {
    // console.log('nextProps');
    // console.log(JSON.stringify(nextProps, null, 2));
    this.numberOfItems = nextProps.installation.foundDevices.length;

    return true;
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let items = this.props.installation.foundDevices;

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" />
            </Button>
            <Title>{loc.welcome.welcome}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <Swiper
              loop={false}
              index={this.props.installation.pageIndex}
              height={windowHeight - 100}
              style={styles.container}
              dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              onMomentumScrollEnd={(e, state, context) => this.setPage(state.index)}
            >
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/pull-tab-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.enableBattery}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.pullTab}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/activate-ble-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.activateBluetooth}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.turnOnBLE}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/reset-connection-01.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.resetConnection}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.pressAndHold}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Image source={require('../../../images/ble-pairing-02.png')} style={styles.image}/>
                <H3 style={{fontWeight: "bold", textAlign: "center", marginTop: 25}}>{loc.instructions.blePairing}</H3>
                <Text style={{marginTop: 17, textAlign: "center"}}>{loc.instructions.ensurePairing}</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text style={{marginTop: 17, textAlign: "left"}}>{loc.instructions.selectBLE}</Text>
                <List dataArray={items}
                      style={{width: windowWidth - 40, marginTop: 25}}
                      renderRow={(item) =>
                            <ListItem>
                                <Text onPress={this.onNextPress}>{item.name}  -  {item.id}</Text>
                            </ListItem>
                        }>
                </List>
                <Text>Found: {this.numberOfItems}</Text>
                <Text style={{marginTop: 25, textAlign: "center"}}>The connection will happen in:</Text>
                <H3 style={{marginTop: 5, textAlign: "center"}}>src/carfit/sdkConnector.js</H3>
              </View>
            </Swiper>

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
    height: 300,
  },
  askMilesContainer: {
    marginTop: 22
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
  },
  instructionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
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
  bottomContainer: {
    flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default InstallationView;
