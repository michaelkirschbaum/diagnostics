import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Pairing States
const PAIRING_IDLE = 'PAIRING_IDLE';
const PAIRING_DISCOVERY = 'PAIRING_DISCOVERY';
const PAIRING_ATTEMPTING = 'PAIRING_ATTEMPTING';
const PAIRING_FAILURE = 'PAIRING_FAILURE';
const PAIRING_SUCCESS = 'PAIRING_SUCCESS';

// Initial state
const initialState = Map({
  pageIndex: 0,
  paring: PAIRING_IDLE,
  foundDevices: []
});

// Actions
const RESET = 'InstallationState/RESET';
const CHANGE_PAGE = 'InstallationState/CHANGE_PAGE';
const DISCOVER_BLE = 'InstallationState/DISCOVER_BLE';
const START_PAIRING = 'InstallationState/START_PAIRING';

// Action Creaters
export function setPageIndex(value) {
  return {type: CHANGE_PAGE, payload: value};
}

// Reducer
export default function InstallationStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET:
      return initialState;

    case CHANGE_PAGE:
      return state.set('pageIndex', action.payload);

    // case RANDOM_REQUEST:
    //   return loop(
    //     state.set('loading', true),
    //     Effects.promise(requestRandomNumber)
    //   );
    //
    // case RANDOM_RESPONSE:
    //   return state
    //     .set('loading', false)
    //     .set('value', action.payload);

    default:
      return state;
  }
}