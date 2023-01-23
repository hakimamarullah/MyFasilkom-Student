import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import SubjectCard from './SubjectCard';
import {COLORS} from '../constants';
import BlankPage from './BlankPage';

const DayScene = ({data, dayIndex}) => (
  <View style={styles.dayScene}>
    {data[dayIndex] ? (
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data[dayIndex]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SubjectCard data={item} key={item.id} />}
      />
    ) : (
      <BlankPage text={'No Data Found'} />
    )}
  </View>
);
const ScheduleScene = ({route, data}) => {
  return (
    <>
      <DayScene data={data} dayIndex={Number(route.key)} />
    </>
  );
};

export default ScheduleScene;

const styles = StyleSheet.create({
  dayScene: {
    flex: 1,
    marginTop: 10,
    height: '100%',
    zIndex: 99,
    backgroundColor: COLORS.white,
  },
  list: {
    width: '100%',
    height: '100%',
  },
  listContainer: {
    paddingHorizontal: 17,
    gap: 15,
    paddingBottom: 15,
  },
});
