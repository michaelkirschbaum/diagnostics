import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';


// Initial state
const initialState = Map({
  pageIndex: 0
});

// Actions
const CHANGE_PAGE = 'CarInstallationState/CHANGE_PAGE';

// Action Creaters
export function setPageIndex(value) {
  return {type: CHANGE_PAGE, payload: value};
}


// Reducer
export default function CarInstallationStateReducer(state = initialState, action = {}) {
  switch (action.type) {

    case CHANGE_PAGE:
      return state.set('pageIndex', action.payload);

    default:
      return state;
  }
}