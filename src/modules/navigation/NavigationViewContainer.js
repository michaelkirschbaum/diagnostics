import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from './NavigationState';
import NavigationView from './NavigationView';
import {setDrive, setConnection} from '../installation/InstallationState';

/*
connect pulls in the state values and pipes them into the view.
In this case, navigationState (converted from immutable to JS Object)
And the the dispatch methods from NavigationState.
 */
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
    }
  })
)(NavigationView);
