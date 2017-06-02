import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted, setOnboarding} from '../navigation/NavigationState';
import {setPageIndex, discover, clearDevices} from './LoginState';
import LoginView from './LoginView';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS(),
    login: state.get('login').toJS(),
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
    setPageIndex(index) {
      dispatch(setPageIndex(index));
    },
    setPageIndex(index) {
      dispatch(setPageIndex(index));
    },
    setOnboarding(state) {
      dispatch(setOnboarding(state));
    }
  })
)(LoginView);
