import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: 'false',
  authenticate: () => {},
  logout: () => {},
});
const AuthContextProvider = ({children}) => {
  const [authToken, setAuthenticate] = useState();
  useEffect(() => {
    async function fetchToken() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setAuthenticate(token);
      }
    }
    fetchToken();
  }, []);
  const authenticate = token => {
    setAuthenticate(token);
    AsyncStorage.setItem('token', token);
  };
  const logout = () => {
    AsyncStorage.removeItem('token');
    setAuthenticate(null);
  };
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
