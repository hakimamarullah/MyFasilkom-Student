import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const Toast = ({toast}) => {
  let {message, data, type} = toast;
  const color =
    type === 'custom_success'
      ? COLORS.success
      : type === 'custom_danger'
      ? COLORS.danger
      : COLORS.primary;
  const {height, width} = Dimensions.get('window');
  return (
    <View
      style={{
        ...styles.container,
        maxHeight: height / 10,
        minHeight: height / 15,
        width: width / 1.5,
      }}>
      <View style={{...styles.line, backgroundColor: color}}>
        <></>
      </View>
      <View style={styles.content}>
        {data && (
          <Text style={{...styles.title, color: color}}>{data?.title}</Text>
        )}
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  message: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 13,
    fontWeight: 300,
    textAlign: 'justify',
    paddingHorizontal: 2,
    flex: 1,
  },
  title: {
    flex: 1,
    fontFamily: FONTS.TitilliumWeb_BOLD,
    textTransform: 'capitalize',
    color: COLORS.success,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    backgroundColor: COLORS.success,
    width: 15,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    marginRight: 2,
  },
});
