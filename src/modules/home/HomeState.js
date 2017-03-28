import {Map} from 'immutable';
import Vehicle from '../../carfit/vehicle';

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

export function fetchOdometer() {
  return async function(dispatch) {
    var vin = store.getState().get("carInstallation").get("vin");
    var vehicle = new Vehicle(vin);

    dispatch(requestOdometer());

    // call api for odometer value
    var odometer_value = await vehicle.getMileage();

    // dispatch received value
    if (odometer_value) {
      dispatch(receiveOdometer(odometer_value));
    }
    // dispatch error
    else {
      dispatch(rejectOdometer());
    }
  }
}

// reducer
export default function HomeReducer(state = initialState, action) {
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
