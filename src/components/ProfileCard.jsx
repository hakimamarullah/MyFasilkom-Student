import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const ProfileCard = ({data}) => {
  const {
    npm = '',
    major = '',
    username = '',
    gen = '',
    email = '',
  } = data || {};
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.fieldsWrapper}>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>NPM</Text>
            <Text style={styles.fieldContent}>{npm}</Text>
          </View>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Major</Text>
            <Text style={styles.fieldContent}>{major}</Text>
          </View>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Email</Text>
            <Text style={styles.fieldContent}>{email}</Text>
          </View>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Gen</Text>
            <Text style={styles.fieldContent}>{gen}</Text>
          </View>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Username</Text>
            <Text style={styles.fieldContent}>{username}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 35,
    paddingVertical: 7,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 15,
    borderBottomStartRadius: 50,
    borderBottomRightRadius: 15,
    shadowColor: '#686868',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,

    elevation: 8,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  fieldsWrapper: {
    flex: 1,
    marginTop: 7,
  },
  fieldItem: {
    flex: 1,
    marginBottom: 15,
  },
  span: {
    fontFamily: FONTS.TitilliumWeb_REGULAR,
    fontSize: 13,
    letterSpacing: 0.3,
    fontWeight: '300',
  },
  fieldContent: {
    fontFamily: FONTS.TitilliumWeb_REGULAR,
    fontSize: 16,
    color: COLORS.black,
    letterSpacing: 0.4,
  },
});
