import React, {createContext, useState} from 'react';
import {AxiosPublic} from '../utils/http';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useToast} from 'react-native-toast-notifications';
import {isTokenExpired} from '../utils';
import {DangerToastConfig, SuccessToastConfig} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const logout = () => {
    setIsLoading(true);
    // EncryptedStorage.removeItem('token').catch(err =>
    //   console.debug(err.message),
    // );
    setIsLoading(false);
    setIsLoggedIn(false);
  };

  const login = async (username, password) => {
    setIsLoading(true);
    setIsLoggedIn(true);
    setIsLoading(false);
    // AxiosPublic.post('/auth/login', {username, password})
    //   .then(res => {
    //     if (res.status === 200) {
    //       EncryptedStorage.setItem('token', res.data.data.accessToken)
    //         .then(() => setIsLoading(false))
    //         .then(() => {
    //           toast.show(
    //             "You're logged in",
    //             SuccessToastConfig({title: 'Login Success'}),
    //           );
    //         });
    //     } else {
    //       console.log(res.status);
    //     }
    //   })
    //   .then(() => {
    //     setIsLoggedIn(true);
    //   })
    //   .catch(err => {
    //     const msg = err.response
    //       ? err.response.data.message
    //       : 'Invalid username or password';
    //     toast.show(msg, DangerToastConfig({title: 'Login Failed'}));
    //   })
    //   .finally(() => setIsLoading(false));
  };

  React.useEffect(() => {
    setIsLoading(true);
    setIsLoading(false);
    setIsLoggedIn(false);
    // EncryptedStorage.getItem('token')
    //   .then(res => {
    //     if (res && !isTokenExpired(res)) {
    //       setIsLoggedIn(true);
    //       setToken(res);
    //     }
    //     if (isTokenExpired(res)) {
    //       setIsLoggedIn(false);
    //     }
    //   })
    //   .catch(err => {
    //     setIsLoggedIn(false);
    //     setIsLoading(false);
    //     console.error(err);
    //   })
    //   .finally(() => setIsLoading(false));
  }, []);
  return (
    <AuthContext.Provider value={{isLoading, isLoggedIn, login, logout, token}}>
      {children}
    </AuthContext.Provider>
  );
};
