import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import HomeView from './HomeView';
import {fetchOdometer} from './HomeState';

export default connect(
  state => ({
    navigationState: state.get('navigationState').toJS(),
    home: state.get('home').toJS(),
    connected: state.get('installation').get("connected")
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
    }
  })
)(HomeView);
