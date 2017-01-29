import {fromJS} from 'immutable';

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
  return {
    type: SWITCH_ROUTE,
    payload: index
  };
}

export function openDrawer(): Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer(): Action {
  return {
    type: CLOSE_DRAWER,
  };
}

const initialState = fromJS({
  roots: {
    index: 0,
    routes: [
      {key: 'LoginRoute', title: 'CARFIT'},
      {key: 'WelcomeRoute', title: 'WELCOME'},
      {key: 'MainRoute', title: 'CARFIT'},
    ]
  },
  // Scenes for the `HomeTab` tab.
  LoginRoute: {
    index: 0,
    routes: [
      {key: 'Login'}
    ]
  },
  // Scenes for the `Counter` pages.
  WelcomeRoute: {
    index: 0,
    routes: [{key: 'Welcome', title: 'Counter for Test'}]
  },
  // Scenes for the `ProfileTab` tab.
  MainRoute: {
    index: 0,
    routes: [{key: 'Info', title: 'Color Screen'}]
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