import React, {useContext, useEffect} from 'react';
import {AppProvider, AuthContext, AuthProvider} from './contexts';
import AppNavContainer from './navigators/AppNavContainer';
import {ToastProvider} from 'react-native-toast-notifications';
import Toast from './components/Toast';
import {enableLatestRenderer} from 'react-native-maps';
import SplashScreen from 'react-native-splash-screen';
enableLatestRenderer();
const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    <ToastProvider
      swipeEnabled={true}
      renderType={{
        custom_success: toast => <Toast toast={toast} />,
        custom_danger: toast => <Toast toast={toast} />,
      }}>
      <AppProvider>
        <AuthProvider>
          <AppNavContainer />
        </AuthProvider>
      </AppProvider>
    </ToastProvider>
  );
};

export default App;
