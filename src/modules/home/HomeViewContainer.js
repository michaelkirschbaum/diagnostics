import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import HomeView from './HomeView';
import {Map} from 'immutable';

const initialState = Map({
  odometer: {
    isFetching: false,
    didInvalidate: false,
    meters: 0
  }
});

// actions
const REQUEST_ODOMETER = 'GET_ODOMETER';
const RECEIVE_ODOMETER = 'RECEIVE_ODOMETER';
const REJECT_ODOMETER = 'REJECT_ODOMETER';

// action creators
export function requestOdometer() {
  return {
    type: REQUEST_ODOMETER
  }

export function receiveOdometer(meters) {
  return {
    type: RECEIVE_ODOMETER,
    meters
  }
}

export function rejectOdometer() {
  return {
    type: REJECT_ODOMETER
  }
}

// reducer
export default function odometer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_ODOMETER:
      return state;

    case RECEIVE_ODOMETER:
      return state;

    case REJECT_ODOMETER:
      return state;

    default:
      return state;
  }
}

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
  })
)(HomeView);
