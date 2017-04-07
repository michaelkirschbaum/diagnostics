import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  NativeModules
} from 'react-native';
import { Container, Header, Title, Content, InputGroup, Input, Button, Icon, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
  var loc = fr;
else
  var loc = en;
import carfitTheme from '../../config/carfit-theme';

// import * as NavigationState from '../../modules/navigation/NavigationState';
// import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer} from '../navigation/NavigationState';

/**
 * Verification view
 */
const VerificationView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    // this.props.pushRoute({key:'Verification', title: loc.verification.verification});
    this.props.switchRoute(1);
  },

  popRoute() {
    this.props.onNavigateBack();
  },

  render() {

    const index = this.props.index;
    const emailPlaceholder = 'email@carfit.com';

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" />
            </Button>
            <Title>{loc.verification.verification}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder
            keyboardShouldPersistTaps="always"
            theme={carfitTheme}
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <View style={styles.container}>
              <Text>{loc.verification.welcome}</Text>
              <Text style={{marginTop: 12}}>{loc.verification.instructions}</Text>
              <Text style={{marginTop: 12}}>Email: {emailPlaceholder}</Text>
            </View>

            <View style={styles.inputContainer}>
              <H3 style={styles.titles}>{loc.verification.code}</H3>
              <InputGroup borderType='rounded' style={styles.textInput}>
                <Input
                  placeholder='Enter code from email'
                  onSubmitEditing={(event) => {
                    // Some Event for pressing ENTER
                  }}/>
              </InputGroup>
            </View>

            <View style={styles.bottomContainer}>
              <Text style={{marginBottom: 12}}>{loc.verification.resend}</Text>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary}}
                      onPress={this.onNextPress}
              >{loc.general.continue}</Button>
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
    // justifyContent: 'left',
    // alignItems: 'left',
    marginTop: 80,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 200
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
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
    flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default VerificationView;
