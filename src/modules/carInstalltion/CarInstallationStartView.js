import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Header, Title, Content, Footer, InputGroup, Input, Button, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';

import * as NavigationState from '../../modules/navigation/NavigationState';

/**
 * Welcome view
 */
const CarInstallationStartView = React.createClass({
  propTypes: {
    // dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.pushRoute({key: 'CarInstallation', title: loc.carInstallation.inCarInstallation});
  },

  render() {

    return (
        <Container theme={carfitTheme}>
          <Header>
            <Title>{loc.carInstallation.inCarInstallation}</Title>
          </Header>
          <View style={styles.headerLine} />
          <Content
            padder
            keyboardShouldPersistTaps="always"
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <View style={styles.container}>
              <H3 style={styles.header}>{loc.carInstallation.header1}</H3>
              <Text style={styles.message}>{loc.carInstallation.message1}</Text>
              <H3 style={styles.header}>{loc.carInstallation.header2}</H3>
              <Text style={styles.message}>{loc.carInstallation.message2}</Text>
              <H3 style={styles.header}>{loc.carInstallation.header3}</H3>
              <Text style={styles.message}>{loc.carInstallation.message3}</Text>
              <H3 style={styles.header}>{loc.carInstallation.header4}</H3>
              <Text style={styles.message}>{loc.carInstallation.message4}</Text>
              <H3 style={styles.header}>{loc.carInstallation.header5}</H3>
              <Text style={styles.message}>{loc.carInstallation.message5}</Text>
            </View>

          </Content>
          <Footer theme={carfitTheme} style={styles.footer}>
            <View style={styles.bottomContainer}>
              <Button rounded
                      style={{alignSelf: 'auto'}}
                      textStyle={{color: colors.textPrimary}}
                      onPress={this.onNextPress}
              >{loc.general.continue}</Button>
            </View>
          </Footer>
        </Container>
    );
  }
});

const styles = StyleSheet.create({
  headerLine: {
    height: 1,
    backgroundColor: colors.headerTextColor
  },
  header: {fontWeight: "bold", marginTop: 25},
  message: {marginTop: 2},
  container: {
    flex: 1,
    // justifyContent: 'left',
    // alignItems: 'left',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
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
  footer: {
    height: 150,
    backgroundColor: colors.backgroundPrimary,
    borderColor: colors.backgroundPrimary
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CarInstallationStartView;
