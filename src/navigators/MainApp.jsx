/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Info, Attendance, Profile, Schedule} from '../screens';
import {COLORS, FONTS, ROUTES} from '../constants';
import {BottomNavigator, BottomIcon} from '../components';
import AttendanceNavigator from './AttendanceNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      initialRouteName={ROUTES.HOME}
      backBehavior="history"
      screenOptions={({route}) => ({
        tabBarAllowFontScaling: true,
        tabBarShowLabel: false,
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
        tabBarIcon: ({focused}) => (
          <BottomIcon focused={focused} route={route} />
        ),
      })}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen name={ROUTES.SCHEDULE} component={Schedule} />
      <Tab.Screen
        name={ROUTES.ATTENDANCE_STACK}
        component={AttendanceNavigator}
        options={{headerShown: false, lazy: false}}
      />
      <Tab.Screen
        name={ROUTES.INFO}
        component={Info}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

const MainApp = () => {
  return (
    <Stack.Navigator
      backBehavior="history"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        name={ROUTES.HOME_TAB}
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MainApp;
