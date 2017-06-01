import React, {PropTypes, PixelRatio} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  WebView,
  NativeModules
} from 'react-native';
import {
  Container,
  Content,
  InputGroup,
  Input,
  Button,
  Text,
  H3,
  Footer
} from 'native-base';
import colors from '../../config/colors';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import {Field, reduxForm} from 'redux-form';
import Authentication from '../../utils/authentication';
var Auth0Lock = require('react-native-lock');
import Login from '../../carfit/login';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
import {responsiveWidth, responsiveHeight, responsiveFontSize} from 'react-native-responsive-dimensions';
import Auth0 from 'react-native-auth0';

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const LoginView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    auth: PropTypes.instanceOf(Authentication)
  },

  continue() {
    var region = NativeModules.SettingsManager.settings.AppleLocale;

    if (region.endsWith('FR')) {
      this.props.pushRoute({key: 'Norauto', title: ''})
    } else {
      var login = new Login()

      const auth0 = new Auth0("carfit.auth0.com");

      auth0
        .authentication("t2mDZ2JX86H2iKiM9QhAutQkgHo0x42M")
        .login(this.state.email, this.state.password, "Username-Password-Authentication", {scope: 'openid offline_access', device: 'SOMEDEVICE'})
        .then((credentials) => {
          login.auth0("carfit.auth0.com", credentials);
        }).catch(error => console.log(error));

      this.props.pushRoute({key: 'Verification', title: loc.verification.verification});
    }
  },

  onPasswordPress() {
    // this.props.dispatch(NavigationState.pushRoute({key: 'ResetPasswordCode', title: 'Reset Password'}));
  },

  setPage(index) {
    this.props.setPageIndex(index);
  },

  render() {
    const index = this.props.index;
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    return (
      <Container>
        {/*<Content*/}
        {/*padder={false}*/}
        {/*keyboardShouldPersistTaps="always"*/}
        {/*theme={carfitTheme}*/}
        {/*style={{backgroundColor: colors.backgroundPrimary, paddingLeft: 0}}*/}
        {/*ref={c => this._content = c}>*/}
        <View style={styles.scrollContainer}>
          {this.getScroll()}
        </View>
      </Container>
    );
  },

  locationFrance() {
    if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
      return true;
    else
      return false;
  },

  getScroll() {
    if (this.locationFrance()) {
      return (
        <Swiper
          loop={false}
          index={this.props.login.pageIndex}
          dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          onMomentumScrollEnd={(e, state, context) => this.setPage(state.index)}
        >
          <View style={styles.instructionsContainer}>
            <Image source={require('../../../images/norauto.png')} style={styles.logo}/>
            <View style={styles.textContainer}>
              <Text style={styles.textBody}>{loc.login.welcome1}</Text>
              <Text style={styles.textBody}>{loc.login.welcome2}</Text>
              <Text style={styles.textBody}>{loc.login.welcome3}</Text>
              <Text style={styles.textBody}>{loc.login.attention}</Text>
             </View>
          </View>
          <View style={styles.instructionsContainer}>
            <Image source={require('../../../images/intro-01.jpg')}
                   style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width, marginBottom: 15}}/>
            <Text style={styles.textTitle}>{loc.login.marketingTitle1a}</Text>
            <Text style={styles.textTitle}>{loc.login.marketingTitle1b}</Text>
            <Text style={styles.textBody}>{loc.login.marketingText1a}</Text>
          </View>
          <View style={styles.instructionsContainer}>
              <Image source={require('../../../images/intro-02.jpg')}
                   style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width, marginBottom: 15}}/>
              <Text style={styles.textTitle}>{loc.login.marketingTitle2a}</Text>
              <Text style={styles.textBody2}>{loc.login.marketingText2a}</Text>
              <Text style={styles.textBody2}>{loc.login.marketingText2b}</Text>
              <View style={styles.bottomContainer}>
                    <Footer theme={carfitTheme} style={styles.footer}>
                          <Button rounded
                                style={styles.button}
                                textStyle={{color: colors.textPrimary}}
                                onPress={this.continue}
                          >{loc.general.continue}
                          </Button>
                     </Footer>
              </View>
            </View>
        </Swiper>
      );
    } else {
      return (
        <Swiper
          loop={false}
          index={this.props.login.pageIndex}
          dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          onMomentumScrollEnd={(e, state, context) => this.setPage(state.index)}
        >
          <View style={styles.instructionsContainer}>
            <Image source={require('../../../images/intro-01.jpg')}
                   style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width, marginBottom: 15}}/>
            <Text style={styles.textTitle}>{loc.login.marketingTitle1a}</Text>
            <Text style={styles.textTitle}>{loc.login.marketingTitle1b}</Text>
            <Text style={styles.textBody}>{loc.login.marketingText1a}</Text>
          </View>
          <View style={styles.instructionsContainer}>
            <Image source={require('../../../images/intro-02.jpg')}
                   style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width, marginBottom: 15}}/>
            <Text style={styles.textTitle}>{loc.login.marketingTitle2a}</Text>
            <Text style={styles.textBody}>{loc.login.marketingText2a}</Text>
            <Text style={styles.textBody}>{loc.login.marketingText2b}</Text>
          </View>
          <View style={styles.instructionsContainer}>
            <Image source={require('../../../images/intro-03.jpg')}
                   style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width, marginBottom: 15}}/>
            <Text style={styles.textTitle}>{loc.login.marketingTitle3a}</Text>
            <Text style={styles.textBody}>{loc.login.marketingText3a}</Text>
            <Text style={styles.textBody}>{loc.login.marketingText3b}</Text>
          </View>
          <View style={{height: Dimensions.get('window').height, flex: 1, marginTop: 52}}>
            <Content
              padder={false}
              keyboardShouldPersistTaps="always"
              theme={carfitTheme}
              style={{backgroundColor: colors.backgroundPrimary, paddingLeft: 0}}
              ref={c => this._content = c}>
              <View style={styles.container}>
                <Image source={require('../../../images/carfit-logo-black-bg.png')} style={styles.logo}/>
              </View>
              <View style={styles.method}>
                <Button>{loc.login.signin}</Button>
                <Button>{loc.login.signup}</Button>
              </View>
              <View style={styles.social}>
                <Button rounded
                  style={styles.socialButton}
                >{loc.login.twitter}</Button>
                <Button rounded
                  style={styles.socialButton}
                >{loc.login.google}</Button>
                <Button rounded
                  style={styles.socialButton}
                >{loc.login.facebook}</Button>
              </View>
              <View style={styles.divider}>
                <Text>{loc.login.method}</Text>
              </View>
              <View style={styles.inputContainer}>
                <InputGroup borderType='rounded' style={styles.textInput}>
                  <Input
                    placeholder='yours@example.com'
                    onSubmitEditing={(event) => {
                  this.refs.PasswordInput._textInput.focus();
                }}
                    onChangeText = {(text) => this.setState({email: text})}/>
                </InputGroup>
                <InputGroup borderType='rounded' style={styles.textInput}>
                  <Input
                    ref='PasswordInput'
                    placeholder='your password'
                    secureTextEntry={true}
                    onChangeText = {(text) => this.setState({password: text})}/>
                </InputGroup>
                <View style={styles.bottomContainer}>
                  <Text style={styles.changePassword} onPress={this.onPasswordPress}>{loc.login.forgotPassword}</Text>
                  <Button rounded
                          style={{alignSelf: 'auto'}}
                          textStyle={{color: colors.textPrimary}}
                          onPress={() => this.continue()}
                  >{loc.general.continue}</Button>
                </View>
              </View>
            </Content>
          </View>
        </Swiper>
      );
    }
  }
});

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.backgroundPrimary,
  },
  textTitle: {
    color: colors.textPrimary,
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSize: responsiveFontSize(2.35),
    fontWeight: 'bold',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center'
  },
  textBody: {
    color: colors.textPrimary,
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSize: responsiveFontSize(2.35),
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center'
  },
  textBody2: {
    color: colors.textPrimary,
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSize: responsiveFontSize(1.5),
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5,
    marginBottom: 13
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 24
  },
  instructionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  textContainer: {
    marginTop: -70
  },
  bottomContainer: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: 42,
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  },
  welcomeTitle: {
    color: colors.textPrimary,
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'center'
  },
  button: {
    alignSelf: 'center',
  },
  changePassword: {
    marginBottom: 12,
    textDecorationLine: 'underline'
  },
  divider: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  social: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 130,
    marginTop: 35,
    flex: 1
  },
  method: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialButton: {
    alignSelf: 'center'
  }
});

export default LoginView;
