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
    EncryptedStorage.removeItem('user')
      .catch(err => console.debug(err.message))
      .finally(() => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  };
  const login = async (username, password) => {
    setIsLoading(true);
    EncryptedStorage.getItem('user')
      .then(user => {
        const credentials = JSON.parse(user);
        if (
          credentials.username === username &&
          credentials.password === password
        ) {
          setToken(credentials);
          toast.show(
            "You're logged in",
            SuccessToastConfig({title: 'Login Success'}),
          );
          setIsLoggedIn(true);
        } else {
          throw new Error('Username or password invalid');
        }
      })
      .catch(e => {
        setIsLoading(false);
        toast.show(e.message, DangerToastConfig({title: 'Login Failed'}));
      });
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
    EncryptedStorage.getItem('user')
      .then(res => {
        res = res || '{}';
        const {username = '', password = ''} = JSON.parse(res);
        setIsLoading(username && password);
        setIsLoggedIn(username && password);
        // if (res && !isTokenExpired(res)) {
        //   setIsLoggedIn(true);
        //   setToken(res);
        // }
        // if (isTokenExpired(res)) {
        //   setIsLoggedIn(false);
        // }
      })
      .catch(err => {
        setIsLoggedIn(false);
        setIsLoading(false);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <AuthContext.Provider value={{isLoading, isLoggedIn, login, logout, token}}>
      {children}
    </AuthContext.Provider>
  );
};
