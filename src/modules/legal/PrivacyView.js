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

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

const PrivacyView = React.createClass({
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
          padder={false}
          keyboardShouldPersistTaps="always"
          style={{flex: 1, backgroundColor: colors.backgroundPrimary, height: windowHeight}}
          ref={c => this._content = c}>

          <H1>Privacy Policy</H1>
            <Text>
              This website is the property of CARFIT CORP. We take the privacy of all visitors to this website very seriously and therefore set out in this privacy policy our position regarding certain privacy matters.

              This privacy policy covers all data that is shared by a visitor with us whether via our website, including but not limited to carfit.com, askmiles.com and carfit.freshdesk.com directly, via the CARFIT app or any  other CARFIT CORP app, or via email, or via the Ask Miles bot.

              This website privacy policy has been is occasionally updated by us so please do re-review it from time to time.

              Our Privacy Policy provides an explanation as to what happens to any personal data that you share with us, or that we collect from you either directly via this website, via email, or via the Ask Miles bot.
            </Text>
          <H1>Information We Collect</H1>
            <Text>
              In operating our website we may collect and process the following data about you:

              Details of your visits to our website and the resources that you access, including, but not limited to, traffic data, location data, weblog statistics, interactions with the CARFIT App or other CARFIT CORP Apps and other communication data.

              Information that you provide by filling in forms on our website, via in the CARFIT App or other CARFIT CORP Apps, such as when you register to receive information, a newsletter etc., or make a purchase.

              Information provided to us when you communicate with us for any reason, including registering the CARFIT sensor, registering the CARFIT app, adding a car, or interacting with any other CARFIT Apps or services, or filling-out warranty registration information, posting on Facebook, Kickstarter, or Twitter, or communicating with us via any other channel.

              Information provided to us about your car, your car's maintenance records, your car's maintenance history, your cars usage and wear data, and any other information pertaining to the VIN or your car.
            </Text>

          <H1>Use of Cookies</H1>
            <Text>
              On occasion, we may gather information about your computer for our services and to provide statistical information regarding the use of our website to our advertisers.

              Such information will not identify you personally it is statistical data about our visitors and their use of our site. This statistical data does not identify any personal details whatsoever. It is used by use to analyse how visitors to connectedevice.com, connectedwatch.com, cogitowatch.com, cookoowatch.com and connectedevice.freshdesk.com  interact with the website so that we can continue to develop this website and make it a better experience for our visitors.

              We may gather information about your general internet use by using a cookie file that is downloaded to your computer. Where used, these cookies are downloaded to your computer automatically. This cookie file is stored on the hard drive of your computer as cookies contain information that is transferred to your computers hard drive. They help us to improve our website and the service that we provide to you.

              All computers have the ability to decline cookies. This can be done by activating the setting on your browser which enables you to decline the cookies. Please note that should you choose to decline cookies, you may be unable to access particular parts of our website.

              Our advertisers may also use cookies, over which we have no control. Such cookies (if used) would be downloaded once you click on advertisements on our website.
            </Text>

          <H1>Use of Your Information</H1>
            <Text>
              The information that we collect and store relating to you is primarily used to enable us to provide our services to you, and to improve your customer experience through enhancements to our website, services, apps, bot, and devices. In addition, we may use the information for the following purposes:

                To provide you with information requested from us, relating to our products or services. To provide information on other products which we feel may be of interest to you, where you have consented to receive such information.

                To meet our contractual commitments to you.

                To notify you about issues pertianing to your car, your usage, your car's upcoming service requirements, your car's current and project resale value, or any other information pertaining to your car that may be relevant to you.

                To notify you about any changes to our apps or websites, such as improvements or service/product changes, that may affect our service.

                If you are an existing customer, we may contact you with information about goods and services similar to those which were the subject of a previous sale to you.

                Further, we may use your data, or permit selected third parties to use your data, so that you can be provided with information about unrelated goods and services which we consider may be of interest to you. We or they may contact you about these goods and services by any of the methods that you consented at the time your information was collected.

                If you are a new customer, we will only contact you or allow third parties to contact you only when you have provided consent and only by those means you provided consent for.

                If you do not want us to use your data for our or third parties you will have the opportunity to withhold your consent to this when you provide your details to us on the form on which we collect your data.

                Please be advised that we do not reveal information about identifiable individuals to our advertisers unless previously consented to by you.  With your consent, however, we will connect you with a service provider who could help resolve issues pertaining to your vehicle.

                On occasion, we may provide advertisers or service providers with aggregate statistical information about our visitors or users, however, in such cases, the information will be anonymized and any personally identifiable information will be removed.
            </Text>

          <H1>Storing Your Personal Data</H1>
            <Text>
              We may transfer data that we collect from you to locations outside of the United States of America or of the European Economic Area for processing and storing. Also, it may be  processed by staff�s operating outside the United States of America or the European Economic Area who work for us or for one of our suppliers. For example, such staff maybe engaged in the processing and concluding of your order, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all reasonable steps to make sure that your data is treated securely and in agreement with this Privacy Policy.

              Data that is provided to us is stored on our secure servers. Details relating to any transactions entered into on our site will be encrypted to ensure its safety.

              Vehicle data and personally identifyable data is stored separately on secure servers.

              The transmission of information via the internet is not completely secure and therefore we cannot guarantee the security of data sent to us electronically and transmission of such datais therefore entirely at your own risk. Where we have given you (or where you have chosen) a password so that you can access certain parts of our site, you are responsible for keeping this password confidential.
            </Text>

          <H1>Disclosing Your Information</H1>
            <Text>
              Where applicable, we may disclose your personal information to any member of our group. This includes, where applicable, our subsidiaries, our holding company and its other subsidiaries (if any).

              We may also disclose your personal information to third parties:

                Where we sell any or all of our business and/or our assets to a third party.

                Where we are legally required to disclose your information.

                To assist fraud protection and minimise credit risk.
            </Text>

          <H1>Third Party Links</H1>
            <Text>
              You mind find links to third party websites on our website. These websites should have their own privacy policies which you should check. We do not accept any responsibility or liability for their policies whatsoever as we have no control over them.
            </Text>

          <H1>Access To Information</H1>
            <Text>
              The Data Protection Act 1998 gives you the right to access the information that we hold about you. Please note that any demand for access may be subject to payment of a fee of $25 USD which covers our costs in providing you with the information requested. Should you wish to receive details that we hold about you please contact us using the contact details below.
            </Text>

          <H1>Contacting Us</H1>
            <Text>
              We welcome any questions, comments or requests you may have regarding this Privacy Policy. Please do not hesitate to contact us at support@car.fit

              If you prefer to write to us then our contact address is:
              ATTN: Privacy Policy
              CARFIT CORP.
              16904 Juanita Drive NE #128,
              Kenmore, WA 98028
            </Text>

          <H1>Copyright &copy; 2016 CARFIT CORP. All Rights Reserved</H1>
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
    // backgroundColor: colors.backgroundPrimary,
    backgroundColor: '#550000',
    borderColor: colors.backgroundPrimary,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default PrivacyView;
