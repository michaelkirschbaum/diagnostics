import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import NewVehicleView from './NewVehicleView';
import {setEnterMode, addVehicle, setPageIndex} from '../carInstalltion/CarInstallationState';

export default connect(
  state => ({
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
    setEnterMode(mode) {
      dispatch(setEnterMode(mode));
    },
    addVehicle(vin) {
      dispatch(addVehicle(vin));
    },
    setPageIndex(index) {
      dispatch(setPageIndex(index));
    }
  })
)(NewVehicleView);
