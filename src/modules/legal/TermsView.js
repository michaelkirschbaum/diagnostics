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
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
  var loc = fr;
else
  var loc = en;
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';

import * as NavigationState from '../navigation/NavigationState';


const TermsView = React.createClass({
  propTypes: {},

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

    let headerTitle = loc.legal.privacy;

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

            <Text>Terms - possible webview?</Text>

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

export default TermsView;
