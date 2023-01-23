import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';

const AttendanceHistory = ({navigation}) => {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AttendanceHistory;

const styles = StyleSheet.create({});
