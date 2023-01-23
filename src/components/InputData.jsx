import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from '../constants';
import {camelize} from '../utils';

const InputData = ({
  label,
  placeHolder,
  keyboardType,
  value,
  onChangeText,
  errorMsg,
  isSecureText,
  icon,
  validator,
  textContentType,
  autoCapitalize,
}) => {
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(false);
  const [hidePassword, setHidePassword] = useState(isSecureText);

  const validateInput = input => {
    onChangeText(prev => {
      if (typeof prev === 'object') {
        return {...prev, [camelize(label)]: input};
      }
      return input;
    });
    if (validator) {
      setIsError(validator(input));
    }
  };

  const handleOnPressIcon = () => {
    if (isSecureText) {
      setHidePassword(prev => !prev);
    }
  };

  const passwordIconName = () => {
    return hidePassword ? icon : 'unlock-alt';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} </Text>
      <View style={styles.inputContainer(active, isError)}>
        <Icon
          name={isSecureText ? passwordIconName() : icon}
          color={COLORS.gray}
          size={24}
          onPress={() => handleOnPressIcon()}
          style={styles.icon(active, isError)}
        />
        <TextInput
          placeholder={placeHolder}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          textContentType={textContentType}
          value={value}
          selectTextOnFocus
          secureTextEntry={hidePassword}
          onChangeText={text => validateInput(text)}
          onFocus={() => setActive(true)}
          onBlur={() => {
            setActive(false);
            validateInput(value);
          }}
          style={styles.input}
        />
      </View>
      {isError && <Text style={styles.error}>{errorMsg}</Text>}
    </View>
  );
};

export default InputData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginBottom: 15,
  },
  label: {
    paddingLeft: 10,
    color: COLORS.grayLabel,
    marginTop: 10,
    fontFamily: FONTS.TitilliumWeb_REGULAR,
    fontWeight: 400,
    fontSize: 14,
    top: 8,
  },
  inputContainer: (active, error) => ({
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor:
      active && !error ? COLORS.primary : error ? COLORS.red : COLORS.gray,
    shadowColor: COLORS.white,
    shadowOpacity: 80,
    shadowRadius: 10,
  }),
  input: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    letterSpacing: 0.5,
  },
  icon: (active, error) => ({
    textAlign: 'left',
    flex: 0.1,
    color: active && !error ? COLORS.primary : error ? COLORS.red : COLORS.gray,
  }),
  error: {
    color: COLORS.red,
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 11,
    textAlign: 'left',
    marginTop: 5,
    paddingLeft: 10,
  },
});
