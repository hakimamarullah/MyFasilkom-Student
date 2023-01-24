import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {LoginBg} from '../../assets';
import {Button, DropdownSelect, InputData, Loading} from '../../components';
import {DangerToastConfig, SuccessToastConfig} from '../../config';
import {COLORS, ERROR, FONTS, ROUTES} from '../../constants';
import {FormRegisterValidator, Major, Validator} from '../../utils';
import EncryptedStorage from 'react-native-encrypted-storage';
import {AxiosPublic} from '../../utils/http';

const Register = ({navigation}) => {
  const initialState = {
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    npm: '',
    major: '',
    year: '',
  };
  const toast = useToast();
  const [formState, setFormState] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [majorError, setMajorError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const data = ['Computer Science', 'Information System'];
  const {
    password,
    confirmPassword,
    email,
    fullName,
    firstName,
    lastName,
    npm,
    year,
    major,
  } = formState;

  const validity = [
    {
      value: password,
      validator: Validator.checkPassword,
    },
    {
      value: confirmPassword,
      validator: Validator.checkPassword,
    },
    {
      value: email,
      validator: Validator.checkEmail,
    },
    {
      value: firstName,
      validator: Validator.checkNonBlankString,
    },
    {
      value: lastName,
      validator: Validator.checkNonBlankString,
    },
    {
      value: fullName,
      validator: Validator.checkNonBlankString,
    },
    {
      value: npm,
      validator: Validator.checkNpm,
    },
    {
      value: year,
      validator: Validator.checkNumeric,
    },
    {
      value: major,
      validator: Validator.checkMajor,
    },
  ];
  const handleRegister = () => {
    setIsLoading(true);
    if (formState.password !== formState.confirmPassword) {
      return Alert.alert('Info', "Oopss..password doesn't match", [
        {
          text: 'Close',
        },
      ]);
    }
    if (data.filter(item => item === major).length === 0) {
      setMajorError(true);
      return;
    }
    const updatedData = {
      ...formState,
      major: Major.toEnum(major),
      email: email.toLowerCase(),
      role: 'STUDENT',
    };
    setIsLoading(true);
    EncryptedStorage.setItem(
      'user',
      JSON.stringify({
        username: formState.email.split('@')[0],
        password: formState.password,
      }),
    )
      .then(() => {
        setIsLoading(false);
        toast.show(
          'Your account has been created',
          SuccessToastConfig({title: 'Register Success'}),
        );
        navigation.navigate({
          name: ROUTES.LOGIN,
          params: {username: formState.email.split('@')[0]},
        });
      })
      .catch(e => {
        setIsLoading(false);
        toast.show(e.message, DangerToastConfig({title: 'Register Failed'}));
      });
    // AxiosPublic.post('/auth/register', updatedData)
    //   .then(res => {
    //     if (res.status === 201) {
    //       toast.show(
    //         'Your account has been created',
    //         SuccessToastConfig({title: 'Register Success'}),
    //       );
    //       navigation.navigate({
    //         name: ROUTES.LOGIN,
    //         params: {username: res.data.data.username},
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     if (err.response) {
    //       toast.show(
    //         `${err.response.data.code}: ${err.response.data.message}`,
    //         DangerToastConfig({title: 'Register Failed'}),
    //       );
    //     }
    //   })
    //   .finally(() => setIsLoading(false));
  };

  const goToLogin = () => {
    navigation.navigate(ROUTES.LOGIN);
  };
  React.useEffect(() => {
    setIsValid(FormRegisterValidator(validity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);
  return (
    <ScrollView
      style={styles.container}
      keyboardDismissMode="on-drag"
      contentContainerStyle={styles.scrollViewContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={LoginBg}
        resizeMethod="scale"
        resizeMode="cover"
        style={styles.imgBg}>
        <></>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.loginText}>Register</Text>
          <Text>
            Already have an account?
            <Text style={styles.register} onPress={() => goToLogin()}>
              {'\t '}
              Login
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.form}>
        <InputData
          placeHolder={'Email'}
          icon={'envelope-open'}
          textContentType={'emailAddress'}
          autoCapitalize={'none'}
          onChangeText={setFormState}
          errorMsg={ERROR.email}
          validator={Validator.checkEmail}
          value={formState.email}
          label={'Email'}
        />
        <InputData
          placeHolder={'NPM'}
          icon={'keyboard-o'}
          onChangeText={setFormState}
          errorMsg={ERROR.npmError}
          validator={Validator.checkNpm}
          value={formState.npm}
          label={'NPM'}
        />
        <DropdownSelect
          placeholder={'Major'}
          data={data}
          setSelected={setFormState}
          isError={majorError}
        />
        <InputData
          placeHolder={'Tahun Angkatan'}
          icon={'calendar-o'}
          onChangeText={setFormState}
          errorMsg={ERROR.year}
          validator={Validator.checkYear}
          value={formState.year}
          label={'Year'}
        />

        <InputData
          placeHolder={'FullName'}
          icon={'pencil-square-o'}
          textContentType={'name'}
          onChangeText={setFormState}
          errorMsg={ERROR.blank}
          validator={Validator.checkNonBlankString}
          value={formState.fullName}
          label={'Full Name'}
        />
        <InputData
          placeHolder={'FirstName'}
          icon={'pencil-square-o'}
          textContentType={'namePrefix'}
          onChangeText={setFormState}
          errorMsg={ERROR.blank}
          validator={Validator.checkNonBlankString}
          value={formState.firstName}
          label={'First Name'}
        />
        <InputData
          placeHolder={'LastName'}
          icon={'pencil-square-o'}
          textContentType={'nameSuffix'}
          onChangeText={setFormState}
          errorMsg={ERROR.blank}
          validator={Validator.checkNonBlankString}
          value={formState.lastName}
          label={'Last Name'}
        />
        <InputData
          placeHolder={'Password'}
          icon={'lock'}
          autoCapitalize={'none'}
          textContentType={'password'}
          onChangeText={setFormState}
          errorMsg={ERROR.password}
          validator={Validator.checkPassword}
          value={formState.password}
          label={'Password'}
          isSecureText
        />

        <InputData
          placeHolder={'Confirm Password'}
          icon={'lock'}
          textContentType={'password'}
          autoCapitalize={'none'}
          onChangeText={setFormState}
          errorMsg={ERROR.password}
          validator={Validator.checkPassword}
          value={formState.confirmPassword}
          label={'Confirm Password'}
          isSecureText
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          disabled={!isValid}
          onPress={handleRegister}
          text={'REGISTER'}
        />
      </View>
      <Loading isLoading={isLoading} />
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollViewContainer: {
    flexGrow: 1,
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
    marginVertical: 15,
    bottom: 70,
  },
  buttonContainer: {
    flex: 1,
    bottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
