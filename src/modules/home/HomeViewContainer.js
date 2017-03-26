import {connect} from 'react-redux';
import {pushRoute, popRoute, switchRoute, openDrawer, closeDrawer, navigationCompleted} from '../navigation/NavigationState';
import HomeView from './HomeView';
import {Map} from 'immutable';
import fetch from 'isomorphic-fetch';

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
const INVALIDATE_ODOMETER= 'INVALIDATE_ODOMETER';

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

export function invalidateOdometer() {
  return {
    type: INVALIDATE_ODOMETER
  }
}

// reducer
export default function odometer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_ODOMETER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case RECEIVE_ODOMETER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        meters: action.meters
      });

    case REJECT_ODOMETER:
      return Object.assign({}, state, {});

    case INVALIDATE_ODOMETER:
      return Object.assign({}, state, {
        didInvalidate: true
      });

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
