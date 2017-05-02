import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = Map({
  pageIndex: 0,
  enterMode: 'license',
  vin: '',
  vehicles: [],
  odometer: 0
});

// Actions
const CHANGE_PAGE = 'CarInstallationState/CHANGE_PAGE';
const ENTER_MODE = 'CarInstallationState/ENTER_MODE';
const LOADING = 'CarInstallationState/LOADING';
const SET_VEHICLE = 'CarInstallationState/SET_VEHICLE';
const ADD_VEHICLE = 'CarInstallationState/ADD_VEHICLE';
const SET_ODOMETER = 'SET_ODOMETER';

// Action Creaters
export function setPageIndex(value) {
  return {type: CHANGE_PAGE, payload: value};
}

export function setEnterMode(value) {
  return {type: ENTER_MODE, payload: value};
}

export function setVehicle(value) {
  return {type: SET_VEHICLE, payload: value};
}

export function addVehicle(vehicle) {
  return {type: ADD_VEHICLE, payload: vehicle}
}

export function setOdometer(distance) {
  return {type: SET_ODOMETER, payload: distance}
}

// Reducer,
export default function CarInstallationStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_PAGE:
      return state.set('pageIndex', action.payload);

    case ENTER_MODE:
      return state.set('enterMode', action.payload);

    case LOADING:
      return state.set('loading', action.payload);

    case SET_VEHICLE:
      return state.set('vin', action.payload);

    case ADD_VEHICLE:
      return state.set('vehicles', state.get("vehicles").concat(action.payload));

    case SET_ODOMETER:
      return state.set('odometer', action.payload);

    default:
      return state;
  }
}
