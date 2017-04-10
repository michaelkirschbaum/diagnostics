import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  NativeModules,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  InputGroup,
  Button,
  Input,
  Text,
  Icon,
  H3,
  List,
  ListItem,
} from 'native-base';
import carfitTheme from '../../config/carfit-theme';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
  var loc = fr;
else
  var loc = en;
import colors from '../../config/colors';
import store from '../../redux/store';
import Modal from 'react-native-simple-modal';
import Vehicle from '../../carfit/vehicle';

const NewVehicleView = React.createClass({
  getInitialState: function() {
    return {
      plate: '',
      vin: '',
      year: '',
      make: '',
      model: '',
      modalVisible: false,
      loading: false
    };
  },

  async addVIN(vin) {
    this.setState({loading: true});

    // add user vehicle
    vehicle = new Vehicle();

    if (!this.validVIN(vin))
      console.log("Invalid VIN.");
    else {
      var response = await vehicle.addByVIN(vin);

      // notify user whether vehicle has been added
      if (response) {
        this.props.addVehicle(response["vin"]);
        this.setState({year: response["year"]});
        this.setState({make: response["make"]});
        this.setState({model: response["model"]});

        // verify vehicle
        this.setState({modalVisible: true});
      }
      else {
        Alert.alert(
          'Fail',
          'Unable to add vehicle.',
          [{text: 'OK', onPress: () => console.log('OK Pressed.')}],
          {cancellable: false}
        );
      }
    }
  },

  async addPlate(plate, region) {
    this.setState({loading: true});

    // add user vehicle
    vehicle = new Vehicle();

    if (!this.validPlate(plate))
      console.log("Invalid plate.");
    else {
      var response = await vehicle.addByPlate(plate, region);

      // notify user whether vehicle has been added
      if (response) {
        this.props.addVehicle(response["vin"]);
        this.setState({year: response["year"]});
        this.setState({make: response["make"]});
        this.setState({model: response["model"]});

        // verify vehicle
        this.setState({modalVisible: true});
      }
      else {
        Alert.alert(
          'Fail',
          'Unable to add vehicle.',
          [{text: 'OK', onPress: () => console.log('OK Pressed.')}],
          {cancelable: false}
        );
      }
    }
  },

  validVIN(vin) {
    return true;
  },

  validPlate(plate) {
    return true;
  },

  popRoute() {
    this.props.setPageIndex(0);
    this.props.onNavigateBack();
  },

  setPage(index) {
    this.props.setPageIndex(index);
  },

  setMode(mode) {
    this.props.setEnterMode(mode);
  },

  turnOffModal() {
    this.setState({connecting: false});
    this.setState({modalVisible: false});
  },

  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.carInstallation.inCarInstallation;

    let finalView = store.getState().get("carInstallation").get("enterMode");

    getFinalView = function () {
      if (finalView == 'vin') {
        return (
          <View>
            {/* <View style={styles.profilesContainer}>
              <TouchableOpacity onPress={this.setMode('license')}>
                <Image source={require('../../../images/enter-plate.png')} style={styles.icon}/>
              </TouchableOpacity>
            </View> */}

            <Image source={require('../../../images/enter-vin.png')} style={styles.image}/>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='vinInput'
                placeholder={loc.carInstallation.enterVin}
                onChangeText = {(text) => this.setState({text})}
              />
            </InputGroup>
            {/* <Text
              style={{marginTop: 22, textAlign: "center", color: colors.primary, textDecorationLine: 'underline'}}
              onPress={() => { this.setMode('license') }}>{loc.carInstallation.enterLicensePlate}</Text> */}
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary, textDecorationLine: 'underline'}}
                      onPress={() => this.addVIN(this.state.text)}
              >{loc.general.continue}</Button>
            </View>
            <ActivityIndicator
              style={styles.spinner}
              animating={this.state.loading}
              size='large'
            />
          </View>
        )
      } else {
        return (
          <View>
            {/* <View style={styles.profilesContainer}>
              <TouchableOpacity onPress={this.setMode('vin')}>
                <Image source={require('../../../images/enter-vin.png')} style={styles.icon}/>
              </TouchableOpacity>
            </View> */}

            <Image source={require('../../../images/enter-plate.png')} style={styles.image}/>
             <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='licenseInput'
                placeholder={loc.carInstallation.enterLicensePlate}
                onChangeText = {(text) => this.setState({plate: text})}
              />
            </InputGroup>
            <InputGroup borderType='rounded' style={styles.textInput}>
              <Input
                ref='regionInput'
                placeholder={loc.carInstallation.enterRegion}
                onChangeText = {(text) => this.setState({region: text})}
              />
            </InputGroup>
            {/* <Text
              style={{marginTop: 22, textAlign: "center", color: colors.primary, textDecorationLine: 'underline'}}
              onPress={() => { this.setMode('vin') }}>{loc.carInstallation.enterByVin}</Text> */}
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary, textDecorationLine: 'underline'}}
                      onPress={() => this.addPlate(this.state.plate, this.state.region)}
              >{loc.general.continue}</Button>
            </View>
            <ActivityIndicator
              style={styles.spinner}
              animating={this.state.loading}
              size='large'
            />
          </View>
        )
      }
    }.bind(this);

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
          style={{backgroundColor: colors.backgroundPrimary}}
          ref={c => this._content = c}>

          <View style={styles.instructionsContainer}>
            {getFinalView()}
          </View>

          <Modal
            open={this.state.modalVisible}
            modalDidOpen={() => undefined}
            modalDidClose={() => undefined}
            style={{alignItems: 'center'}}
            closeOnTouchOutside={false}
            containerStyle={{}}
            modalStyle={{
              borderRadius: 7
            }}>
            <View>
              <Image source={require('../../../images/icons/check.png')} style={styles.icon}/>
              <Text style={{color: 'black', alignSelf: 'center'}}>loc.carInstallation.success</Text>
              <Text style={{color: 'black', textAlign: 'center'}}>{this.state.make}</Text>
              <Text style={{color: 'black', textAlign: 'center'}}>{this.state.model}</Text>
              <Text style={{color: 'black', textAlign: 'center'}}>{this.state.year}</Text>
              <TouchableHighlight>
                <Image
                  source={require('../../../images/add-picture-car-identified.png')}
                  style={styles.image}
                />
              </TouchableHighlight>
              <Button rounded
                    style={{alignSelf: 'center'}}
                    textStyle={{color: colors.textPrimary}}
                    onPress={() => this.props.onNavigateBack()}
              >Continue</Button>
              <Button transparent
                    textStyle={{color: 'black'}}
                    style={{alignSelf: 'center'}}
                    onPress={() => this.turnOffModal()}
              >{loc.carInstallation.failure}</Button>
            </View>
          </Modal>
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
    // flex: 1,
    // height: 200,
    // width: 100
  },
  askMilesContainer: {
    marginTop: 22
  },
  textInput: {
    // alignSelf: 'stretch',
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginTop: 22,
  },
  instructionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    // flex: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  bottomContainer: {
    // flex: 1,
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
    // backgroundColor: '#002200',
    marginBottom: 16,
  },
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

export default NewVehicleView;
