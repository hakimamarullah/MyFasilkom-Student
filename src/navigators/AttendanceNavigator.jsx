import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {COLORS, FONTS, ROUTES} from '../constants';
import {Attendance, AttendanceHistory, CameraScreen} from '../screens';

const Stack = createStackNavigator();

const AttendanceNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          color: COLORS.white,
          fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
          letterSpacing: 0.6,
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name={ROUTES.ATTENDANCE} component={Attendance} />
      <Stack.Screen
        name={ROUTES.ATTENDANCE_HISTORY}
        component={AttendanceHistory}
      />
      <Stack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default AttendanceNavigator;
