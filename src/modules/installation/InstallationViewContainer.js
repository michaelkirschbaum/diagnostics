import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import InstallationView from './InstallationView';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS()
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
  })
)(InstallationView);
