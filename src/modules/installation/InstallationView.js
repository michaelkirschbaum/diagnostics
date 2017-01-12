import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import { Container, Content, InputGroup, Input, Button, Text, H3 } from 'native-base';
import colors from '../../config/colors';
import loc from '../../config/localization';
import carfitTheme from '../../config/carfit-theme';
import Swiper from 'react-native-swiper';

import * as NavigationState from '../../modules/navigation/NavigationState';

/**
 * Login view
 * Likely to be the main app view, but will only display login dialog when needed.
 * Otherwise pass by.
 */
const InstallationView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  onNextPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Verification',
      title: 'Verification'
    }));
  },

  render() {
    let windowHeight = Dimensions.get('window').height;

    let pulltabSprite = '../../../images/pulltab-sprite.png';

    return (
        <Container>
          <Content
            padder
            keyboardShouldPersistTaps="always"
            theme={carfitTheme}
            style={{backgroundColor: colors.backgroundPrimary}}
            ref={c => this._content = c}>

            <Swiper
              loop={false}
              height={windowHeight - 100}
              style={styles.container}
              dot={<View style={{backgroundColor:colors.inputBackground, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              activeDot={<View style={{backgroundColor:colors.primary, width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            >
              <View style={styles.instructionsContainer}>
                {/*<Sprite*/}
                  {/*sequence =  { [0, 0.33, 0.66] }*/}
                  {/*move = { 'horizontal' }*/}
                  {/*loop = { true }*/}
                  {/*fps = { 1 }*/}
                  {/*isPlaying = { true }*/}
                  {/*source = { '../../../images/pulltab-sprite.png' }*/}
                  {/*width = { 200 }*/}
                  {/*height = { 200 } />*/}
                <Text>Instructions 1</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text>Instructions 2</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text>Instructions 3</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text>Instructions 4</Text>
              </View>
              <View style={styles.instructionsContainer}>
                <Text>Instructions 5</Text>
              </View>
            </Swiper>

          </Content>
        </Container>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  textInput: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.primary,
    borderWidth: 2.5
  },
  instructionsContainer: {
    marginLeft: 20,
    marginRight: 20,
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

export default InstallationView;
