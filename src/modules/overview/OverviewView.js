import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  NativeModules
} from 'react-native';
import { Container, Header, Title, Content, Footer, InputGroup, Input, Button, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
import carfitTheme from '../../config/carfit-theme';
import {responsiveWidth, responsiveHeight, responsiveFontSize} from 'react-native-responsive-dimensions';
import * as NavigationState from '../navigation/NavigationState';

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;


function Slide1(props) {
    return (
    <View style={styles.subContainer}>
      <Image source={require('../../../images/icons/device.png')} style={styles.icon}/>
            <View>
                  <H3 style={styles.header}>{loc.overview.header1}</H3>
                  <Text style={styles.message}>{loc.overview.message1}</Text>
            </View>
      </View>  
    );  
}

function Slide2(props) {
    return (
     <View style={styles.subContainer}>
      <Image source={require('../../../images/icons/phone.png')} style={styles.icon}/>
            <View>
                <H3 style={styles.header}>{loc.overview.header2}</H3>
                <Text style={styles.message}>{loc.overview.message2}</Text>
            </View>
      </View>
    );  
}

function Slide3(props) {
    return (
     <View style={styles.subContainer}>
      <Image source={require('../../../images/icons/miles.png')} style={styles.icon}/>
            <View>
                <H3 style={styles.header}>{loc.overview.header3}</H3>
                <Text style={styles.message}>{loc.overview.message3}</Text>
            </View>
      </View>
    );  
}

function Slide4(props) {
    return (
      <View style={styles.subContainer}>
      <Image source={require('../../../images/icons/usage.png')} style={styles.icon}/>
          <View>
                <H3 style={styles.header}>{loc.overview.header4}</H3>
                <Text style={styles.message}>{loc.overview.message4}</Text>
            </View>
      </View>
    );  
}



const OverviewView = React.createClass({
  render() {
    return (
        <Container theme={carfitTheme}>
          <Header>
            <Title>{loc.overview.overview}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder={false}
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <View style={styles.container}>
              
             <Slide1/> 
             <Slide2/> 
             <Slide3/> 
             <Slide4/> 
              
             
              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/service.png')} style={styles.icon}/>
                <View>
              <H3 style={styles.header}>{loc.overview.header5}</H3>
              <Text style={styles.message}>{loc.overview.message5}</Text>
                </View>
              </View>
              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/car_details.png')} style={styles.icon}/>
                <View>
              <H3 style={styles.header}>{loc.overview.header6}</H3>
              <Text style={styles.message}>{loc.overview.message6}</Text>
                </View>
              </View>
              <View style={styles.subContainer}>
                <Image source={require('../../../images/icons/settings.png')} style={styles.icon}/>
                <View>
              <H3 style={styles.header}>{loc.overview.header7}</H3>
              <Text style={styles.message}>{loc.overview.message7}</Text>
                </View>
              </View>
            </View>
            <Footer style={styles.footer}>
                  <Button rounded
                          style={styles.button}
                          textStyle={{color: colors.textPrimary}}
                          onPress={this.onNextPress}
                          >{loc.general.continue}
                  </Button>
            </Footer>
          </Content> 
          
        </Container>
    );
  },

  onNextPress() {
    this.props.pushRoute({key: 'Home', title: loc.settings.settings});
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  header: {
    fontWeight: "bold",
    // fontSize: responsiveFontSize(2.35)
  },
  message: {
    // fontSize: responsiveFontSize(2.35)
  },
  container: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 20,
    marginRight: 20
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: responsiveWidth(4.5)
  },
  icon: {
    width: responsiveHeight(5),
    height: responsiveHeight(5),
    marginRight: responsiveWidth(6),
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: responsiveHeight(12),
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'auto',
    height: responsiveHeight(6),
    width: responsiveWidth(28)
  }
});

export default OverviewView;
