import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import {COLORS, ROUTES} from '../../constants';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {BarcodePic, NFC} from '../../assets';

const Attendance = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsBuildings={true}
            showsUserLocation={true}
            showsIndoors={true}
            showsMyLocationButton={true}
            zoomEnabled={true}
            initialRegion={{
              latitude: -6.364,
              longitude: 106.828,
              latitudeDelta: 0.018,
              longitudeDelta: 0.018,
            }}
          />
        </View>
        <View style={styles.bottomSection}>
          <View style={[styles.section, styles.options]}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.pressableOption}>
              <View style={styles.iconBtn}>
                <Image style={styles.icon} source={NFC} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate(ROUTES.CAMERA)}
              style={styles.pressableOption}>
              <View style={styles.iconBtn}>
                <Image style={styles.icon} source={BarcodePic} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.section} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottomSection: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  contentContainerStyle: {
    flexDirection: 'column',
    paddingBottom: 17,
  },
  mapContainer: {
    flex: 1,
    height:
      Math.max(
        Dimensions.get('window').width,
        Dimensions.get('window').height,
      ) / 4,
  },
  map: {
    flex: 1,
  },
  btn: {
    bottom: 0,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableOption: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 12,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 80,
    height: 80,
    tintColor: COLORS.white,
  },
  iconBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
