import {AsyncStorage} from 'react-native';
import auth0 from 'auth0-react-native';

const AUTHENTICATION_STORAGE_KEY = 'CarFitState:Authentication';

export function getAuthenticationToken() {
  return AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY);
}

export async function setAuthenticationToken(token) {
  return AsyncStorage.setItem(AUTHENTICATION_STORAGE_KEY, token);
}

export async function clearAuthenticationToken() {
  return AsyncStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
}

export default class Authentication {
  constructor() {
    this.auth = new auth0.WebAuth({
      domain: "carfit.auth0.com",
      clientID: "t2mDZ2JX86H2iKiM9QhAutQkgHo0x42M"
    });
  }
}
