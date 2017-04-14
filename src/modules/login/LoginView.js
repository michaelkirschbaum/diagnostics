import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  WebView,
  NativeModules
} from 'react-native';
import {Container, Content, InputGroup, Input, Button, Text, H3, Footer} from 'native-base';
import colors from '../../config/colors';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import {Field, reduxForm} from 'redux-form';
import Authentication from '../../utils/authentication';
var Auth0Lock = require('react-native-lock');
import Login from '../../carfit/login';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const LoginView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    auth: PropTypes.instanceOf(Authentication)
  },

  onNextPress(email, password) {
    // retrieve auth0 token
    var auth = new Authentication();

    auth.login(email, password);

    this.props.pushRoute({key: 'Verification', title: loc.verification.verification});
  },

  continue() {
    var region = NativeModules.SettingsManager.settings.AppleLocale;

    if (region == 'fr_FR' || region == 'en_FR') {
      this.props.pushRoute({key: 'Norauto', title: ''})
    } else {
      var login = new Login()
      var lock = new Auth0Lock({clientId: "t2mDZ2JX86H2iKiM9QhAutQkgHo0x42M", domain: "carfit.auth0.com"});
      lock.show({}, (err, profile, token) => {
        console.log('Logged in!' + ' ' + profile + ' ' + token);
        login.auth0('carfit.auth0.com', token);
      });

      this.props.pushRoute({key: 'Welcome', title: loc.verification.welcome});
    }
  },

  onPasswordPress() {
    // this.props.dispatch(NavigationState.pushRoute({
    //   key: 'ResetPasswordCode',
    //   title: 'Reset Password'
    // }));
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
          <Swiper
            loop={false}
            index={this.props.login.pageIndex}
            dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            onMomentumScrollEnd={(e, state, context) => this.setPage(state.index)}
          >
            <View style={styles.instructionsContainer}>
              <Image source={require('../../../images/intro-01.jpg')}
                     style={{width: windowWidth, height: windowWidth * 1.2, marginBottom: 15}}/>
              <Text style={styles.textTitle}>{loc.login.marketingTitle1a}</Text>
              <Text style={styles.textTitle}>{loc.login.marketingTitle1b}</Text>
              <Text style={styles.textBody}>{loc.login.marketingText1a}</Text>
            </View>
            <View style={styles.instructionsContainer}>
              <Image source={require('../../../images/intro-02.jpg')}
                     style={{width: windowWidth, height: windowWidth * 1.1, marginBottom: 15}}/>
              <Text style={styles.textTitle}>{loc.login.marketingTitle2a}</Text>
              <Text style={styles.textBody}>{loc.login.marketingText2a}</Text>
              <Text style={styles.textBody}>{loc.login.marketingText2b}</Text>
            </View>
            <View style={styles.instructionsContainer}>
              <Image source={require('../../../images/intro-03.jpg')}
                     style={{width: windowWidth, height: windowWidth * 1.1, marginBottom: 15}}/>
              <Text style={styles.textTitle}>{loc.login.marketingTitle3a}</Text>
              <Text style={styles.textBody}>{loc.login.marketingText3a}</Text>
              <Text style={styles.textBody}>{loc.login.marketingText3b}</Text>
              <Footer theme={carfitTheme} style={styles.footer}>
                <View style={styles.bottomContainer}>
                  <Button rounded
                          style={{alignSelf: 'auto'}}
                          textStyle={{color: colors.textPrimary}}
                          onPress={this.continue}
                  >{loc.general.continue}</Button>
                </View>
              </Footer>
            </View>

            {/* <View style={{height: windowHeight, flex: 1, marginTop: 52}}>
              <Content
                padder={false}
                keyboardShouldPersistTaps="always"
                theme={carfitTheme}
                style={{backgroundColor: colors.backgroundPrimary, paddingLeft: 0}}
                ref={c => this._content = c}>
                <View style={styles.container}>
                  <Image source={require('../../../images/carfit-logo-black-bg.png')} style={styles.logo}/>
                </View>
                <View style={styles.inputContainer}>
                  <H3 style={styles.titles}>{loc.login.email}</H3>
                  <InputGroup borderType='rounded' style={styles.textInput}>
                    <Input
                      placeholder='Email Address'
                      onSubmitEditing={(event) => {
                    this.refs.PasswordInput._textInput.focus();
                  }}
                      onChangeText = {(text) => this.setState({email: text})}/>
                  </InputGroup>
                  <H3 style={styles.titles}>{loc.login.password}</H3>
                  <InputGroup borderType='rounded' style={styles.textInput}>
                    <Input
                      ref='PasswordInput'
                      placeholder='Password'
                      onChangeText = {(text) => this.setState({password: text})}/>
                  </InputGroup>
                  <View style={styles.bottomContainer}>
                    <Text style={{marginBottom: 12}} onPress={this.onPasswordPress}>{loc.login.forgotPassword}</Text>
                    <Button rounded
                            style={{alignSelf: 'auto'}}
                            textStyle={{color: colors.textPrimary}}
                            onPress={() => this.onNextPress(this.state.email, this.state.password)}
                    >{loc.general.continue}</Button>
                  </View>
                </View>
              </Content>
            </View> */}

          </Swiper>
          {/*</Content>*/}
        </View>
      </Container>
    );
  }
});

LoginView = reduxForm({
  form: 'login'
})(LoginView);

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.backgroundPrimary
  },
  textTitle: {
    color: colors.textPrimary,
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  textBody: {
    color: colors.textPrimary,
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSize: 18,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center'
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 52,
    // marginBottom: 20,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
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
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titles: {
    marginTop: 17,
    marginBottom: 8
  },
  bottomContainer: {
    // flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: 42,
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  }
});

export default LoginView;
