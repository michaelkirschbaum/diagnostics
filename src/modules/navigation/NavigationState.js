import {fromJS} from 'immutable';
import {NativeModules} from 'react-native';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
if (NativeModules.SettingsManager.settings.AppleLocale.endsWith("FR"))
  var loc = fr;
else
  var loc = en;
import _ from 'lodash';
import {NavigationExperimental} from 'react-native';

const {StateUtils: NavigationStateUtils} = NavigationExperimental;

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const SWITCH_ROUTE = 'NavigationState/SWITCH_ROUTE';
const DRAWER_OPEN = 'NavigationState/DRAWER_OPEN';
const DRAWER_CLOSE = 'NavigationState/DRAWER_CLOSE';

// Action creators
export function pushRoute(route) {
  return {
    type: PUSH_ROUTE,
    payload: route
  };
}

export function popRoute() {
  return {type: POP_ROUTE};
}

export function switchRoute(index) {
  let payload = 0;
  console.log('Switch Route: ', index);
  console.log('_.isNumber: ', _.isNumber(index));
  if (!_.isNumber(index) && _.isString(index)) {
    switch (index) {
      case 'LoginRoute':
        payload = 0;
        break;
      case 'WelcomeRoute':
        payload = 1;
        break;
      case 'Overview':
        payload = 1;
        break;
      case 'MainRoute':
        payload = 3;
        break;
    }
  } else {
    payload = index;
  }
  return {
    type: SWITCH_ROUTE,
    payload: payload
  };
}

export function openDrawer(): Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer(): Action {
  return {
    type: DRAWER_CLOSE,
  };
}

const initialState = fromJS({
  roots: {
    index: 0,
    routes: [
      {key: 'LoginRoute', title: 'CARFIT'},
      {key: 'WelcomeRoute', title: loc.welcome.welcome},
      {key: 'Overview', title: loc.overview.overview},
      {key: 'MainRoute', title: 'CARFIT'}
    ]
  },
  LoginRoute: {
    index: 0,
    routes: [
      {key: 'Login'}
    ]
  },
  WelcomeRoute: {
    index: 0,
    routes: [{key: 'Welcome', title: loc.welcome.welcome}]
  },
  Overview: {
    index: 0,
    routes: [{key: 'Overview', title: loc.overview.overview}]
  },
  MainRoute: {
    index: 0,
    routes: [
      {key: 'Home', title: 'CARFIT'}
    ]
  },
  drawerOpen: true
});

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE: {
      // Push a route into the scenes stack.
      const route = action.payload;
      const roots = state.get('roots');
      const routeKey = roots.getIn(['routes', roots.get('index')]).get('key'); // Returns the key using the index stored in the tab.
      const scenes = state.get(routeKey).toJS();
      let nextScenes;
      // fixes issue #52
      // the try/catch block prevents throwing an error when the route's key pushed
      // was already present. This happens when the same route is pushed more than once.
      try {
        nextScenes = NavigationStateUtils.push(scenes, route);
      } catch (e) {
        nextScenes = scenes;
      }
      if (scenes !== nextScenes) {
        return state.set(routeKey, fromJS(nextScenes));
      }
      return state;
    }

    case POP_ROUTE: {
      // Pops a route from the scenes stack.
      const roots = state.get('roots');
      const routeKey = roots.getIn(['routes', roots.get('index')]).get('key');
      const scenes = state.get(routeKey).toJS();
      const nextScenes = NavigationStateUtils.pop(scenes);
      console.log('POP');
      console.log(JSON.stringify(nextScenes, null, 2));
      if (scenes !== nextScenes) {
        return state.set(routeKey, fromJS(nextScenes));
      }
      return state;
    }

    case SWITCH_ROUTE: {
      // Switches the tab.
      // Gets the current list of possible roots.
      const roots = state.get('roots').toJS();
      const nextTabs = NavigationStateUtils.jumpToIndex(roots, action.payload);
        // console.log("roots  ", roots);
        console.log("nextTabs  ", nextTabs);
      if (roots !== nextTabs) {
        return state.set('roots', fromJS(nextTabs));
      }
      return state;
    }

    case DRAWER_OPEN: {
      return state.set('drawerOpen', true);
    }
    case DRAWER_CLOSE: {
      return state.set('drawerOpen', false);
    }

    default:
      return state;
  }
}
