// norauto reducer
import {Map} from 'immutable';

const initialState = Map({
  user_code: ''
});

const CHANGE_USER_CODE = 'CHANGE_USER_CODE';

export function changeUserCode(code) {
  return {type: CHANGE_USER_CODE, payload: code}
}

export default function NorautoReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_CODE:
      return state.set('user_code', action.payload);

    default:
      return state;
  }
}
