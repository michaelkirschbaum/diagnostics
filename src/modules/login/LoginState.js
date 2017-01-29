import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {callCognitoLogin} from '../../carfit/sdkConnector';

// LOGIN States
const LOGIN_IDLE = 'LOGIN_IDLE';
const LOGIN_ATTEMPTING = 'LOGIN_ATTEMPTING';
const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Initial state
const initialState = Map({
  pageIndex: 0,
  login: LOGIN_IDLE,
  email: null,
  userId: null
});

// Actions
const RESET = 'LoginState/RESET';
const CHANGE_PAGE = 'LoginState/CHANGE_PAGE';
const START_LOGIN = 'LoginState/START_LOGIN';
const LOGOUT = 'LoginState/LOGOUT';

// Action Creaters
export function setPageIndex(value) {
  return {type: CHANGE_PAGE, payload: value};
}

export function login() {
  return {
    type: LOGIN_ATTEMPTING,
  }
}

export async function requestLogin() {
  return {
    type: LOGIN_RESPONSE,
    payload: await callCognitoLogin()
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

// Reducer
export default function LoginStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESET:
      return initialState;

    case CHANGE_PAGE:
      return state.set('pageIndex', action.payload);

    case LOGIN_ATTEMPTING:
      if (state.get('paring') == LOGIN_IDLE) {
        return loop(
          state.set('paring', LOGIN_ATTEMPTING),
          Effects.promise(requestLogin)
        );
      } else {
        return state;
      }

    case LOGIN_RESPONSE:
      console.log('Simulating login success');
      return state
        .set('email', action.payload.email)
        .set('userId', action.payload.userId);

    case LOGOUT:
      return state
        .set('email', null)
        .set('userId', null);

    default:
      return state;
  }
}