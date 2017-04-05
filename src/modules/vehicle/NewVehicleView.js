import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Title,
  Content,
  View
} from 'native-base';
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import carfitTheme from '../../config/carfit-theme';
import loc from '../../config/localization';
import colors from '../../config/colors';

const NewVehicleView = React.createClass({
  render() {
    let headerTitle = loc.carInstallation.inCarInstallation;

    return (
      <Container theme={carfitTheme}>
        <Header>
          <Button transparent onPress={() => this.props.onNavigateBack()}>
            <Icon name="ios-arrow-back"/>
          </Button>
          <Title>{headerTitle}</Title>
        </Header>
        <Content style={{backgroundColor: colors.backgroundPrimary}}>
        </Content>
      </Container>
    );

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
              animating={this.state.connecting}
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
              animating={this.state.connecting}
              size='large'
            />
          </View>
        )
      }
    }.bind(this);
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
