import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {COLORS, FONTS} from '../constants';

const AttendanceItem = ({data}) => {
  const {subject = '', session = '', checkIn = '', status = ''} = data || {};
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.itemWrapper}>
          <Text style={styles.span}>Subject</Text>
          <Text style={styles.itemText}>{subject}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.span}>Session</Text>
          <Text style={styles.itemText}>{session}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.span}>Check-In Time</Text>
          <Text style={styles.itemText}>{checkIn}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.span}>Status</Text>
          <Text style={styles.itemText}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(AttendanceItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
    shadowColor: '#686868',
    gap: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,

    elevation: 8,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  itemWrapper: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  span: {
    textTransform: 'uppercase',
    fontFamily: FONTS.TitilliumWeb_REGULAR,
    opacity: 0.8,
    letterSpacing: 0.4,
    fontSize: 13,
  },
  itemText: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    color: COLORS.black,
    fontSize: 15,
    textTransform: 'capitalize',
  },
});
