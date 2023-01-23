import {StyleSheet, ImageBackground, Image, StatusBar} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {ROUTES} from '../../constants';
import {Logo, SplashScreenBg} from '../../assets';
import {AuthContext} from '../../contexts';

const Splash = ({navigation}) => {
  const isLoggedIn = true;
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        navigation.replace(ROUTES.HOME_TAB);
      }
    }, 2000);
  }, [isLoggedIn, navigation]);

  return (
    <ImageBackground
      source={SplashScreenBg}
      resizeMode="cover"
      resizeMethod="auto"
      style={styles.container}>
      <StatusBar animated={true} showHideTransition="slide" hidden />
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 224,
    height: 68,
  },
});
