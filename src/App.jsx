import React from 'react';
import {AppProvider, AuthProvider} from './contexts';
import AppNavContainer from './navigators/AppNavContainer';
import {ToastProvider} from 'react-native-toast-notifications';
import Toast from './components/Toast';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
const App = () => {
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
