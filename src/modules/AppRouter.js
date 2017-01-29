/*eslint-disable react/prop-types*/

import React from 'react';
// import ExperimentalViewContainer from './experimental/ExperimentalViewContainer';

import LoginViewContainer from './login/LoginViewContainer';
import VerificationViewContainer from './verification/VerificationViewContainer';
// import ResetPasswordCodeViewContainer from './password/ResetPasswordCodeViewContainer';
// import ResetPasswordViewContainer from './password/ResetPasswordViewContainer';
import WelcomeViewContainer from './welcome/WelcomeViewContainer';
import InstallationViewContainer from './installation/InstallationViewContainer';
//
// import CounterViewContainer from './counter/CounterViewContainer';
// import ColorViewContainer from './colors/ColorViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  // console.log(JSON.stringify(props.scene, null, 2));

  // if (key === 'Experimental') {
  //   return <ExperimentalViewContainer />;
  // }
  //
  if (key === 'Login') {
    return <LoginViewContainer />;
  }
  if (key === 'Verification') {
    return <VerificationViewContainer />;
  }
  // if (key === 'ResetPasswordCode') {
  //   return <ResetPasswordCodeViewContainer />;
  // }
  // if (key === 'ResetPassword') {
  //   return <ResetPasswordViewContainer />;
  // }
  if (key === 'Welcome') {
    return <WelcomeViewContainer />;
  }
  if (key === 'Installation') {
    return <InstallationViewContainer />;
  }
  //
  //
  // if (key === 'Counter') {
  //   return <CounterViewContainer />;
  // }
  //
  // if (key.indexOf('Color') === 0) {
  //   const index = props.scenes.indexOf(props.scene);
  //   return (
  //     <ColorViewContainer
  //       index={index}
  //     />
  //   );
  // }

  throw new Error('Unknown navigation key: ' + key);
}
