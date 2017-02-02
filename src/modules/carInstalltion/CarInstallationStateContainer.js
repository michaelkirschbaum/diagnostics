import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import {setPageIndex, discover, clearDevices} from './CarInstallationState';
import InstallationView from './CarInstallationStateView';

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
    }
  })
)(InstallationView);
