import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {discoverCarfitDevices} from '../../carfit/sdkConnector';

// Pairing States
const PAIRING_IDLE = 'PAIRING_IDLE';
const PAIRING_DISCOVERY = 'PAIRING_DISCOVERY';
const PAIRING_DISCOVERY_RESPONSE = 'PAIRING_DISCOVERY_RESPONSE';
const PAIRING_ATTEMPTING = 'PAIRING_ATTEMPTING';
const PAIRING_RESPONSE = 'PAIRING_RESPONSE';
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
const CLEAR_DEVICES = 'InstallationState/CLEAR_DEVICES';

// Action Creaters
export function setPageIndex(value) {
  return {type: CHANGE_PAGE, payload: value};
}

export function discover() {
  return {
    type: PAIRING_DISCOVERY,
  }
}

export async function requestDevices() {
  return {
    type: PAIRING_DISCOVERY_RESPONSE,
    payload: await discoverCarfitDevices()
  }
}

export function clearDevices() {
  return {
    type: CLEAR_DEVICES,
  }
}

// Reducer
export default function InstallationStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET:
      return initialState;

    case CHANGE_PAGE:
      return state.set('pageIndex', action.payload);

    case PAIRING_DISCOVERY:
      if (state.get('paring') == PAIRING_IDLE) {
        return loop(
          state.set('paring', PAIRING_DISCOVERY),
          Effects.promise(requestDevices)
        );
      } else {
        return state;
      }

    case PAIRING_DISCOVERY_RESPONSE:
      console.log('Simulating found devices');
      return state
        .set('paring', PAIRING_IDLE)
        .set('foundDevices', fromJS(action.payload));

    case CLEAR_DEVICES:
      console.log('Clearing out devices');
      return state.set('foundDevices', fromJS([]));

    default:
      return state;
  }
}