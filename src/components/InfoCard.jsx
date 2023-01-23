import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {COLORS, FONTS} from '../constants';

const InfoCard = ({data, onPress}) => {
  const {title = '', announcer = '', body = '', date = ''} = data || {};
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => onPress(data)}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.announcer}>By: {announcer}</Text>
      </View>
      <View style={styles.body}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textBody}>
          {body}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
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
  body: {
    flex: 2,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  textBody: {
    flex: 1,
    maxHeight: 40,
    fontFamily: FONTS.TitilliumWeb_REGULAR,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.5,
    textAlign: 'justify',
    color: COLORS.black,
  },
  title: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 20,
    color: COLORS.black,
  },
  announcer: {
    fontFamily: FONTS.TitilliumWeb_LIGHT_ITALIC,
  },
  date: {
    fontFamily: FONTS.TitilliumWeb_LIGHT_ITALIC,
    textAlign: 'right',
    color: COLORS.black,
    opacity: 0.6,
    width: '100%',
  },
});
