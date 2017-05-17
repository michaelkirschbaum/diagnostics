import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  NativeModules
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
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';
import * as NavigationState from '../navigation/NavigationState';

// set langauge
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const TermsView = React.createClass({
  render() {
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;

    let headerTitle = loc.settings.terms;

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
          padder={false}
          keyboardShouldPersistTaps="always"
          style={{flex: 1, backgroundColor: colors.backgroundPrimary, height: windowHeight}}
          ref={c => this._content = c}>

          <View>
	          <H1 style={{textAlign: 'center'}}>CARFIT CORP. Terms of Service</H1>
              <H2>1. Terms</H2>
                <Text>
                By accessing the CARFIT app or any CARFIT websites including
                  but not limited to the website at http:\/\/www.car.fit, you
                  are agreeing to be bound by these terms of service, all applicable
                  laws and regulations, and agree that you are responsible for
                  compliance with any applicable local laws. If you do not agree
                  with any of these terms, you are prohibited from using or
                  accessing this site. The materials contained in this website
                  are protected by applicable copyright and trademark law.
                </Text>

              <H2>2. Use License</H2>
                <Text>
                  Permission is granted to temporarily download one copy of the materials (information or software) on CARFIT CORP.s websites or from any of the approved download locations for said materials including the App Store and Play Store for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    modify or copy the materials;
                    use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                    attempt to decompile or reverse engineer any software contained on CARFIT CORP.s website;
                    remove any copyright or other proprietary notations from the materials; or
                    transfer the materials to another person or "mirror" the materials on any other server.

                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by CARFIT CORP. at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </Text>

                <H2>3. Disclaimer</H2>
                  <Text>
                    The materials on CARFIT CORP.s website are provided on an 'as is' basis. CARFIT CORP. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    Further, CARFIT CORP. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                  </Text>

                <H2>4. Limitations</H2>
                  <Text>
                    In no event shall CARFIT CORP. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CARFIT CORP.s website, even if CARFIT CORP. or a CARFIT CORP. authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                  </Text>

                <H2>5. Accuracy of materials</H2>
                  <Text>
                    The materials appearing on CARFIT CORP.s website could include technical, typographical, or photographic errors. CARFIT CORP. does not warrant that any of the materials on its website are accurate, complete or current. CARFIT CORP. may make changes to the materials contained on its website at any time without notice. However CARFIT CORP. does not make any commitment to update the materials.
                  </Text>

                <H2>6. Links</H2>
                  <Text>
                    CARFIT CORP. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CARFIT CORP. of the site. Use of any such linked website is at the users own risk.
                  </Text>

                <H2>7. Modifications</H2>
                  <Text>
                    CARFIT CORP. may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                  </Text>

                <H2>8. Governing Law</H2>
                  <Text>
                    These terms and conditions are governed by and construed in accordance with the laws of Washington and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                  </Text>

                <H2>Privacy Policy</H2>
                  <Text>
                    Your privacy is important to us.

                  	It is CARFIT CORP.s policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. The privacy policy may be found at \/\/app.carfitservices.com/#/privacy-policy.

                  	We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. CARFIT CORP. may change this privacy policy from time to time at CARFIT CORP.s sole discretion.
                  </Text>

                <H1>Copyright &copy; 2016 CARFIT CORP. All Rights Reserved</H1>
          </View>
        </Content>
      </Container>
    );
  },

  popRoute() {
    this.props.onNavigateBack();
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
    backgroundColor: '#550000',
    borderColor: colors.backgroundPrimary,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default TermsView;
