import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const SubjectCard = ({data}) => {
  const {
    subjectName = '',
    room = '',
    dateTime = '',
    meetingTotal = '',
    lecturers = [],
  } = data || {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subjectName}>{subjectName}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.fieldsWrapper}>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Room</Text>
            <Text style={styles.fieldContent}>{room}</Text>
          </View>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Datetime</Text>
            <Text style={styles.fieldContent}>{dateTime}</Text>
          </View>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Meeting's total</Text>
            <Text style={styles.fieldContent}>{meetingTotal}</Text>
          </View>
        </View>
        <View style={styles.fieldsWrapper}>
          <View style={styles.fieldItem}>
            <Text style={styles.span}>Lecturer</Text>
            {lecturers.map((lecturer, id) => (
              <Text key={id} style={[styles.fieldContent, styles.lecturerName]}>
                - {lecturer}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
    fontFamily: FONTS.TitilliumWeb_LIGHT_ITALIC,
    fontSize: 12,
    letterSpacing: 0.3,
    fontWeight: '300',
  },
  fieldContent: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 13,
    color: COLORS.black,
  },
  subjectName: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 16,
    letterSpacing: 1,
    color: COLORS.black,
    textTransform: 'capitalize',
  },
  lecturerName: {
    textTransform: 'capitalize',
  },
});
