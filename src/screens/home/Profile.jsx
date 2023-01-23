import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Button, ProfileCard} from '../../components';
import {COLORS, FONTS} from '../../constants';
import {AuthContext} from '../../contexts';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  const {logout} = useContext(AuthContext);
  const data = {
    npm: 1906293051,
    username: 'hakim.amarullah',
    major: 'Computer Science',
    gen: 2019,
    email: 'hakim.amarullah@ui.ac.id',
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.header}>
            <View style={styles.subsection}>
              <TouchableOpacity>
                <Avatar
                  size={150}
                  uri={
                    'https://0.soompi.io/wp-content/uploads/2021/07/13014424/kim-ji-won-3.jpeg'
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.subsection}>
              <Text style={styles.username}>hakim.amarullah</Text>
            </View>
          </View>
        </View>
        <View style={[styles.section, styles.bottomSection]}>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.touchable} activeOpacity={0.8}>
              <ProfileCard data={data} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            style={styles.btn}
            type="danger"
            text={'logout'}
            onPress={logout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  section: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
    marginBottom: 50,
  },
  username: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 20,
    color: COLORS.black,
    letterSpacing: 0.5,
    opacity: 0.8,
  },
  subsection: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 27,
  },
  bottomSection: {
    bottom: 30,
  },
  btnWrapper: {
    paddingBottom: 30,
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  touchable: {
    flex: 1,
    width: '100%',
  },
  btn: {
    width: '100%',
  },
});
