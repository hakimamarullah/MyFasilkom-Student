import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const BottomNavigator = props => {
  return (
    <View>
      <BottomTabBar {...props} style={styles.tabBar} />
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
  },
});
