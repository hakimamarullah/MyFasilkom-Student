import React from 'react';
import {View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {COLORS} from '../constants';

const Loading = ({isLoading}) => {
  if (!isLoading) {
    return;
  }
  return (
    <View style={styles.loading} pointerEvents="none">
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
