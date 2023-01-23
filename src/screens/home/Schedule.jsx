import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import {ScheduleScene} from '../../components';
import {COLORS, FONTS, SCHEDULE} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
const dummy = {
  id: 1,
  subjectName: 'Penjaminan mutu perangkat lunak',
  room: '2404',
  dateTime: 'Monday, 12.00 - 14.00',
  meetingTotal: '2/10',
  lecturers: ['Dosen 1', 'Dosen 2', 'Dosen 3'],
};
const selasa = {
  ...dummy,
  id: 2,
  subjectName: 'Penjaminan Mutu perangkat lunak',
};
const rabu = {
  ...dummy,
  id: 3,
  subjectName: 'kalkulus I',
};

const kamis = {
  id: 4,
  ...dummy,
  subjectName: 'Matematika diskret',
};

const jumat = {
  ...dummy,
  id: 5,
  subjectName: 'Aljabar linier',
};

const renderLabel = ({route, focused, color}) => (
  <Text style={{...styles.label, color}}>{route.title}</Text>
);

const renderTab = props => (
  <TabBar
    {...props}
    renderLabel={renderLabel}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabBarStyle}
  />
);

const Schedule = ({navigation}) => {
  const layout = useWindowDimensions();
  const data = {
    0: [selasa, rabu, kamis, jumat, {...dummy, id: 10}],
    1: [selasa, rabu],
    2: [rabu],
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(SCHEDULE.routes);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIndex(0);
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={({route}) => <ScheduleScene route={route} data={data} />}
        renderTabBar={renderTab}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  label: {
    margin: 8,
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 16,
    width: '100%',
  },
  indicatorStyle: {
    backgroundColor: COLORS.red,
    borderWidth: 2,
    borderColor: COLORS.red,
  },
  tabBarStyle: {
    backgroundColor: COLORS.primary,
    borderTopColor: COLORS.primary,
  },
});
