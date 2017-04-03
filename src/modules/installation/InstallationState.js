import { Map, fromJS } from 'immutable';
import { loop, Effects } from 'redux-loop';
import Connection from '../../carfit/connection';

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
  foundDevices: [],
  in_drive: false,
  connected: 0
});

// Actions
const RESET = 'InstallationState/RESET';
const CHANGE_PAGE = 'InstallationState/CHANGE_PAGE';
const DISCOVER_BLE = 'InstallationState/DISCOVER_BLE';
const START_PAIRING = 'InstallationState/START_PAIRING';
const CLEAR_DEVICES = 'InstallationState/CLEAR_DEVICES';
const SET_DRIVE = 'SET_DRIVE';
const SET_CONNECTION = 'SET_CONNECTION';

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
  var conn = new Connection();

  return {
    type: PAIRING_DISCOVERY_RESPONSE,
    payload: await conn.getDevices()
  }
}

export function clearDevices() {
  return {
    type: CLEAR_DEVICES,
  }
}

export function setDrive(value) {
  return {
    type: SET_DRIVE,
    payload: value
  }
}

export function setConnection(status) {
  return {
    type: SET_CONNECTION,
    payload: status
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

    case SET_DRIVE:
      return state.set('in_drive', action.payload);

    case SET_CONNECTION:
      return Object.assign({}, state, {
        connected: action.payload
      });

    default:
      return state;
  }
}
