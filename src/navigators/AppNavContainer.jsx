import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../contexts';
import MainApp from './MainApp';
import AuthNav from './AuthNav';

const AppNavContainer = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNav /> : <MainApp />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
