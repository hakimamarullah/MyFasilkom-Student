import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../contexts';
import MainApp from './MainApp';
import AuthNav from './AuthNav';
import {Loading} from '../components';

const AppNavContainer = () => {
  const {isLoggedIn, isLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        !isLoading ? (
          <AuthNav />
        ) : (
          <Loading isLoading={isLoading} />
        )
      ) : (
        <MainApp />
      )}
    </NavigationContainer>
  );
};

export default AppNavContainer;
