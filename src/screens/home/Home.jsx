import {useNavigationState} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView, RefreshControl} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, DigitalClock, SubjectCard} from '../../components';
import {COLORS, FONTS, ROUTES} from '../../constants';
import {getDayGreet} from '../../utils';

const Home = ({navigation}) => {
  const index = useNavigationState(state => state.index);
  const [exitApp, setExitApp] = useState(0);
  const [greet, setGreet] = useState(getDayGreet());
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp === 0) {
      setExitApp(prev => prev + 1);
      ToastAndroid.showWithGravity(
        'Please, Press twice to exit',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  const dummy = {
    subjectName: 'Penjaminan mutu perangkat lunak',
    room: '2404',
    dateTime: 'Monday, 12.00 - 14.00',
    meetingTotal: '2/10',
    lecturers: ['Dosen 1', 'Dosen 2', 'Dosen 3'],
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setGreet(getDayGreet());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (index === 0) {
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <StatusBar animated={true} showHideTransition="slide" hidden />
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.universityName}>Universitas Indonesia</Text>
            <Text style={styles.facultyName}>Faculty of Computer Science</Text>
          </View>
          <View style={styles.greetingSection}>
            <View style={styles.greetingTextContainer}>
              <Text style={styles.greet}>Good {greet}</Text>
              <Text style={styles.username}>Hakim</Text>
            </View>
            <View style={styles.profilePicContainer}>
              <TouchableOpacity
                style={styles.profilePicButton}
                onPress={() => navigation.navigate(ROUTES.PROFILE)}>
                <Avatar
                  uri={
                    'https://0.soompi.io/wp-content/uploads/2021/07/13014424/kim-ji-won-3.jpeg'
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.informationSection}>
            <View style={styles.clockContainer}>
              <DigitalClock />
            </View>
            <View style={styles.taskContainer}>
              <View style={styles.taskCounter}>
                <Text style={styles.infoText}>Finished Class</Text>
                <Text style={[styles.infoText, styles.counter]}>1/5</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.classSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.classSectionText}>Ongoing</Text>
            </View>
            <View style={styles.classSectionBody}>
              <SubjectCard data={dummy} />
            </View>
          </View>
          <View style={styles.classSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.classSectionText}>Upcoming</Text>
            </View>
            <View style={styles.classSectionBody}>
              <SubjectCard data={dummy} />
              <SubjectCard data={dummy} />
              <SubjectCard data={dummy} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profilePicButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: COLORS.primary,
    height: 230,
    paddingHorizontal: 17,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  universityName: {
    color: COLORS.white,
    fontFamily: FONTS.TitilliumWeb_LIGHT,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  facultyName: {
    fontSize: 13,
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    color: COLORS.white,
    letterSpacing: 0.4,
  },
  greetingSection: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informationSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15,
  },
  greet: {
    color: COLORS.white,
    fontSize: 25,
    fontFamily: FONTS.TitilliumWeb_LIGHT,
    letterSpacing: 0.5,
  },
  username: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 20,
    color: COLORS.white,
  },
  clockContainer: {
    flex: 2,
  },
  taskContainer: {
    flex: 3,
    paddingLeft: 40,
  },
  taskCounter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoText: {
    color: COLORS.white,
    fontFamily: FONTS.TitilliumWeb_REGULAR,
    textAlign: 'left',
    fontSize: 15,
    textTransform: 'uppercase',
    left: 0,
  },
  counter: {
    letterSpacing: 1,
    bottom: 1,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  classSection: {
    flex: 1,
    width: '100%',
  },
  sectionHeader: {
    flex: 1,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
    marginBottom: 20,
    paddingBottom: 5,
  },
  classSectionText: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 20,
    color: COLORS.black,
    letterSpacing: 0.3,
  },
  classSectionBody: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    gap: 15,
  },
  greetingTextContainer: {
    bottom: 8,
  },
});
