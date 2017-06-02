import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted, updateFirmware, newVehicle, reconnect} from './NavigationState';
import NavigationView from './NavigationView';
import {setDrive, setConnection, setModalVisible} from '../installation/InstallationState';

/*
connect pulls in the state values and pipes them into the view.
In this case, navigationState (converted from immutable to JS Object)
And the the dispatch methods from NavigationState.
 */
export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS(),
    installation: state.get('installation').toJS()
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
    onNavigateCompleted() {
      dispatch(navigationCompleted());
    },
    openDrawer() {
      dispatch(openDrawer());
    },
    closeDrawer() {
      dispatch(closeDrawer());
    },
    setDrive(value) {
      dispatch(setDrive(value));
    },
    setConnection(status) {
      dispatch(setConnection(status));
    },
    updateFirmware(percent) {
      dispatch(updateFirmware(percent));
    },
    setInstallationModal(state) {
      dispatch(setModalVisible(state));
    },
    newVehicle() {
      dispatch(newVehicle());
    },
    reconnect() {
      dispatch(reconnect());
    }
  })
)(NavigationView);
