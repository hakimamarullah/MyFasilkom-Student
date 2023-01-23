import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AttendanceItem} from '../../components';

const data = [
  {
    id: 1,
    subject: 'Advance Programming',
    session: 'Monday, 23/1/2023 14:00 - 15:00',
    checkIn: 'Monday, 23/1/2023 14:00',
    status: 'present',
  },
  {
    id: 2,
    subject: 'Matematika Dasar',
    session: 'Monday, 23/1/2023 14:00 - 15:00',
    checkIn: 'Monday, 23/1/2023 14:00',
    status: 'present',
  },
  {
    id: 3,
    subject: 'Kalkulus I',
    session: 'Monday, 23/1/2023 14:00 - 15:00',
    checkIn: 'Monday, 23/1/2023 14:00',
    status: 'not present',
  },
  {
    id: 4,
    subject: 'Proyek Perangkat Lunak',
    session: 'Monday, 23/1/2023 14:00 - 15:00',
    checkIn: 'Monday, 23/1/2023 14:00',
    status: 'present',
  },
  {
    id: 5,
    subject: 'Kalkulus II',
    session: 'Tuesday, 23/1/2023 14:00 - 15:00',
    checkIn: 'Tuesday, 23/1/2023 14:00',
    status: 'present',
  },
  {
    id: 6,
    subject: 'Matematika Diskret',
    session: 'Wednesday, 23/1/2023 14:00 - 15:00',
    checkIn: 'Wednesday, 23/1/2023 14:00',
    status: 'not present',
  },
  {
    id: 7,
    subject: 'Aljabar Linier',
    session: 'Friday, 23/1/2023 14:00 - 15:00',
    checkIn: 'Friday, 23/1/2023 14:00',
    status: 'present',
  },
];
const AttendanceHistory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.id}
        renderItem={({item}) => <AttendanceItem data={item} key={item.id} />}
      />
    </SafeAreaView>
  );
};

export default AttendanceHistory;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  contentContainerStyle: {
    marginHorizontal: 17,
    gap: 15,
    marginVertical: 17,
    paddingBottom: 30,
  },
});
