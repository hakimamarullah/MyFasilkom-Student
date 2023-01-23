import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../constants';

const BlankPage = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text || 'No Data'}</Text>
    </View>
  );
};

export default BlankPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.TitilliumWeb_BOLD,
    textTransform: 'uppercase',
    fontSize: 40,
    opacity: 0.4,
  },
});
