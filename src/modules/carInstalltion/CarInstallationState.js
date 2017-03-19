import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = Map({
  pageIndex: 0,
  enterMode: 'license',
  vin: ''
});

// Actions
const CHANGE_PAGE = 'CarInstallationState/CHANGE_PAGE';
const ENTER_MODE = 'CarInstallationState/ENTER_MODE';
const LOADING = 'CarInstallationState/LOADING';
const ADD_VEHICLE = 'CarInstallationState/ADD_VEHICLE'

// Action Creaters
export function setPageIndex(value) {
  return {type: CHANGE_PAGE, payload: value};
}

export function setEnterMode(value) {
  return {type: ENTER_MODE, payload: value};
}

export function addVehicle(value) {
  return {type: ADD_VEHICLE, payload: value};
}

// Reducer
export default function CarInstallationStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_PAGE:
      return state.set('pageIndex', action.payload);

    case ENTER_MODE:
      return state.set('enterMode', action.payload);

    case LOADING:
      return state.set('loading', action.payload);

    case ADD_VEHICLE:
      return state.set('vin', action.payload);

    default:
      return state;
  }
}
