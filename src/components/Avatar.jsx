import {Image, StyleSheet} from 'react-native';
import React from 'react';

const Avatar = ({style, size, uri, resizeMode}) => {
  return (
    <>
      <Image
        resizeMode={resizeMode || 'contain'}
        source={{uri: uri}}
        style={[styles.profilePic(size), style]}
      />
    </>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  profilePic: size => ({
    height: size || 80,
    width: size || 80,
    borderRadius: size ? size - 20 : 60,
  }),
});
