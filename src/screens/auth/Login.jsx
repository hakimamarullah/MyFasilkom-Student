import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {LoginBg} from '../../assets';
import {COLORS, ROUTES, ERROR, FONTS} from '../../constants';
import {Validator} from '../../utils';
import {Button, InputData, Loading} from '../../components';
import {AuthContext} from '../../contexts';

const Login = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login, isLoading} = useContext(AuthContext);

  const handleLogin = async () => {
    await login(username, password);
  };

  const goToRegister = () => {
    navigation.navigate(ROUTES.REGISTER);
  };

  const height = useHeaderHeight();
  React.useEffect(() => {
    setUsername(route.params?.username);
  }, [route.params?.username]);
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={LoginBg}
        resizeMethod="scale"
        resizeMode="cover"
        style={styles.imgBg}>
        <></>
      </ImageBackground>
      <KeyboardAvoidingView
        keyboardVerticalOffset={height - 10}
        contentContainerStyle={styles.keyboardAvoidingViewContainer}
        behavior={Platform.IOS === 'ios' ? 'padding' : 'position'}
        enabled>
        <View style={styles.bottomView}>
          <View>
            <Text style={styles.loginText}>Login</Text>
            <Text>
              Don't have an account?
              <Text style={styles.register} onPress={() => goToRegister()}>
                {'\t '}
                Register
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.form}>
          <InputData
            placeHolder={'Username'}
            icon={'user'}
            onChangeText={setUsername}
            validator={Validator.checkNonBlankString}
            errorMsg={ERROR.blank}
            value={username}
            label={'Username'}
          />
          <InputData
            placeHolder={'Password'}
            icon={'lock'}
            onChangeText={setPassword}
            validator={Validator.checkNonBlankString}
            errorMsg={ERROR.blank}
            value={password}
            label={'Password'}
            isSecureText
          />
          <Button onPress={handleLogin} text={'LOGIN'} />
        </View>
      </KeyboardAvoidingView>
      <Loading isLoading={isLoading} />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  keyboardAvoidingViewContainer: {
    backgroundColor: COLORS.white,
  },
  imgBg: {
    height: Dimensions.get('window').height / 2.5,
  },
  bottomView: {
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    bottom: 50,
    height: 150,
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  loginText: {
    fontFamily: FONTS.TitilliumWeb_BOLD,
    fontSize: 36,
    color: COLORS.primary,
  },
  register: {
    color: COLORS.primary,
    fontWeight: 200,
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    textDecorationLine: 'underline',
  },
  form: {
    marginHorizontal: 30,
    marginVertical: 10,
    bottom: 70,
  },
});
