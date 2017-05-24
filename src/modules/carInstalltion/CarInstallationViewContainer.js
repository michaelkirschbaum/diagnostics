import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import {setPageIndex, setEnterMode, setVehicle, addVehicle, setOdometer} from './CarInstallationState';
import {setModal} from '../home/HomeState';
import InstallationView from './CarInstallationView';
import {setOnboarding} from '../installation/InstallationState';

export default connect(
  state => ({
    carInstallation: state.get('carInstallation').toJS(),
    navigationState: state.get('navigationState').toJS(),
  }),
  dispatch => ({
    switchRoute(index) {
      dispatch(switchRoute(index));
    },
    pushRoute(index) {
      dispatch(pushRoute(index));
    },
    onNavigateBack() {
      dispatch(popRoute());
    },
    openDrawer() {
      dispatch(openDrawer());
    },
    closeDrawer() {
      dispatch(closeDrawer());
    },
    setPageIndex(index) {
      dispatch(setPageIndex(index));
    },
    setEnterMode(value) {
      dispatch(setEnterMode(value));
    },
    setVehicle(value) {
      dispatch(setVehicle(value));
    },
    addVehicle(vehicle) {
      dispatch(addVehicle(vehicle));
    },
    setOdometer(distance) {
      dispatch(setOdometer(distance));
    },
    setOdometerModal(status) {
      dispatch(setModal(status));
    },
    setOnboarding(state) {
      dispatch(setOnboarding(state));
    }
  })
)(InstallationView);
