import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../constants';

const Button = ({style, onPress, text, disabled, type = 'primary'}) => {
  React.useEffect(() => {}, [disabled]);
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.btn, style, styles.buttonDisabled(disabled, type)]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width / 1.2,
    height: 40,
    borderRadius: 20,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonDisabled: (disabled, type) => ({
    backgroundColor: disabled
      ? '#ccc'
      : type === 'danger'
      ? COLORS.red
      : COLORS.primary,
    color: disabled ? '#999' : COLORS.white,
  }),
  buttonText: {
    color: COLORS.white,
    fontWeight: 400,
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 20,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
