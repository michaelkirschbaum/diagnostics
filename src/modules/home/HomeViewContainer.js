import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import HomeView from './HomeView';
import {fetchOdometer} from './HomeState';
import {setDrive, setConnection} from '../installation/InstallationState';
import {setOdometer} from '../carInstalltion/CarInstallationState';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS(),
    home: state.get('home').toJS(),
    connected: state.get('installation').get("connected"),
    vehicle: state.get('carInstallation').toJS()
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
    fetchOdometer() {
      dispatch(fetchOdometer());
    },
    setDrive(value) {
      dispatch(setDrive(value));
    },
    setConnection(status) {
      dispatch(setConnection(status));
    },
    setOdometer(distance) {
      dispatch(setOdometer(distance));
    }
  })
)(HomeView);
