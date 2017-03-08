import {AsyncStorage} from 'react-native';
// import Auth0 from 'react-native-Auth0';

const AUTHENTICATION_STORAGE_KEY = 'CarFitState:Authentication';

// Auth0 authentication helper
export default class Authentication {
  login(email, password) {}
}

export function getAuthenticationToken() {
  return AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY);
}

export async function setAuthenticationToken(token) {
  return AsyncStorage.setItem(AUTHENTICATION_STORAGE_KEY, token);
}

export async function clearAuthenticationToken() {
  return AsyncStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
}
1
