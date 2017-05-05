import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted, newVehicle} from '../navigation/NavigationState';
import MyCarsView from './MyCarsView';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS(),
    carInstallation: state.get('carInstallation').toJS()
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
    newVehicle() {
      dispatch(newVehicle());
    }
  })
)(MyCarsView);
