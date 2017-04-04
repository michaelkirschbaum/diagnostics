/*eslint-disable react/prop-types*/

import React from 'react';
// import ExperimentalViewContainer from './experimental/ExperimentalViewContainer';

import LoginViewContainer from './login/LoginViewContainer';
import VerificationViewContainer from './verification/VerificationViewContainer';
// import ResetPasswordCodeViewContainer from './password/ResetPasswordCodeViewContainer';
// import ResetPasswordViewContainer from './password/ResetPasswordViewContainer';
import WelcomeViewContainer from './welcome/WelcomeViewContainer';
import InstallationViewContainer from './installation/InstallationViewContainer';
import CarInstallationStartViewContainer from './carInstalltion/CarInstallationStartViewContainer';
import CarInstallationViewContainer from './carInstalltion/CarInstallationViewContainer';
import CarPhotoViewContainer from './carPhoto/CarPhotoViewContainer';
import OverviewViewContainer from './overview/OverviewViewContainer';
import HomeViewContainer from './home/HomeViewContainer';
import SettingsViewContainer from './settings/SettingsViewContainer';
import MyCarsViewContainer from './myCars/MyCarsViewContainer';
import DetailsViewContainer from './details/DetailsViewContainer';
import AccountViewContainer from './account/AccountViewContainer';
import PrivacyViewContainer from './legal/PrivacyViewContainer';
import TermsViewContainer from './legal/TermsViewContainer';
import DriveViewContainer from './drive/DriveViewContainer';
import UsageViewContainer from './usage/UsageViewContainer';
import AlertsViewContainer from './alerts/AlertsViewContainer';
import NorautoViewContainer from './norauto/NorautoViewContainer';
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
  if (key === 'CarStartInstallation') {
    return <CarInstallationStartViewContainer />;
  }
  if (key === 'CarInstallation') {
    return <CarInstallationViewContainer />;
  }
  if (key === 'CarPhoto') {
    return <CarPhotoViewContainer />;
  }
  if (key === 'Overview') {
    return <OverviewViewContainer />;
  }
  if (key === 'Home') {
    return <HomeViewContainer />;
  }
  if (key === 'Settings') {
    return <SettingsViewContainer />;
  }
  if (key === 'MyCars') {
    return <MyCarsViewContainer />;
  }
  if (key === 'Details') {
    return <DetailsViewContainer />;
  }
  if (key === 'Account') {
    return <AccountViewContainer />;
  }
  if (key === 'Privacy') {
    return <PrivacyViewContainer />;
  }
  if (key === 'Terms') {
    return <TermsViewContainer />;
  }
  if (key === 'Drive') {
    return <DriveViewContainer />
  }
  if (key === 'Alerts') {
    return <AlertsViewContainer />
  }
  if (key === 'Usage') {
    return <UsageViewContainer />
  }
  if (key === 'Norauto') {
    return <NorautoViewContainer />
  }

  throw new Error('Unknown navigation key: ' + key);
}
