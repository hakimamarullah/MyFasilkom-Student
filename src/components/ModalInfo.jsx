import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../constants';
import Button from './Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

const ModalInfo = ({visible, onPress, data, onRequestClose}) => {
  const {title = '', announcer = '', body = '', date = ''} = data || {};
  return (
    <Modal
      style={styles.modal}
      animationType="fade"
      backdropColor={'white'}
      backdropOpacity={1}
      statusBarTranslucent={true}
      onRequestClose={onRequestClose}
      transparent={true}
      visible={visible}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.meta}>
                <Text style={styles.metaAnnouncer}>By: {announcer}</Text>
                <Text style={styles.metaDate}>{date}</Text>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.bodyContent}>{body}</Text>
            </View>
            <View style={styles.footer}>
              <Button onPress={onPress} style={styles.btn} text={'CLOSE'} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.overlay} />
    </Modal>
  );
};

export default ModalInfo;

const styles = StyleSheet.create({
  modal: {
    justifyContent: undefined,
    alignItems: undefined,
    margin: 0,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 17,
    marginVertical: 55,
  },
  safeArea: {flex: 1, zIndex: 9999, height: '100%'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingHorizontal: 5,
    shadowColor: '#000000',
    zIndex: 999,
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 8,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: COLORS.black,
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1.5,
    paddingTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: COLORS.grayLight,
  },
  meta: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: COLORS.black,
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    fontSize: 20,
    marginBottom: 5,
  },
  metaDate: {
    flex: 1,
    textAlign: 'right',
    fontFamily: FONTS.TitilliumWeb_REGULAR,
  },
  metaAnnouncer: {
    flex: 1,
    textAlign: 'left',
    fontFamily: FONTS.TitilliumWeb_REGULAR,
  },
  body: {
    flex: 2,
    flexGrow: 10,
    margin: 5,
    paddingHorizontal: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 10,
    paddingBottom: 10,
  },
  bodyContent: {
    fontFamily: FONTS.TitilliumWeb_SEMI_BOLD,
    textAlign: 'justify',
    letterSpacing: 0.2,
    fontSize: 15,
    color: COLORS.black,
  },
  btn: {
    width: '40%',
    height: '50%',
  },
});
