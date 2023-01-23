import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, FONTS} from '../constants';
import dayjs from 'dayjs';

const DigitalClock = ({format}) => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 1);
    return () => clearInterval(id);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {date.format(format || 'ddd, DD/MM/YYYY')}
      </Text>
      <Text style={[styles.date, styles.time]}>{date.format('HH:mm:ss')}</Text>
    </View>
  );
};

export default DigitalClock;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  date: {
    color: COLORS.white,
    fontFamily: FONTS.TitilliumWeb_REGULAR,
    textAlign: 'left',
    textTransform: 'uppercase',
    fontSize: 15,
    left: 0,
  },
  time: {
    letterSpacing: 1.8,
  },
});
