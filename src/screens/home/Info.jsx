import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {InfoCard, ModalInfo} from '../../components';
import {COLORS} from '../../constants';

const data = [
  {
    id: 1,
    title: 'PMPL',
    announcer: 'Dosen 1',
    date: '21/2/2023',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste doloremque tenetur architecto laboriosam nostrum? Totam id quaerat quos veritatis unde harum repudiandae, voluptas vitae dicta aliquam nemo sed. Voluptate, tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti architecto commodi hic, nam ratione porro ut! Tempore maiores architecto veritatis, inventore sapiente delectus amet atque! Nostrum quaerat obcaecati illo sint? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati commodi itaque mollitia quam, non, maxime temporibus iure eligendi tempora dolor eaque reiciendis doloremque fugit! Aliquam, soluta? Cum, ducimus ratione! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente at harum eum hic, veniam, laudantium eius inventore corporis dicta in sunt sed distinctio rem! Culpa sapiente officia porro sed neque',
  },
  {
    id: 2,
    title: 'PMPL',
    announcer: 'Dosen 2',
    date: '21/2/2023 14:00',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam animi cum illo. Sequi hic vero accusantium ipsa eaque, assumenda necessitatibus dolore quasi laudantium laboriosam quibusdam porro dignissimos iusto quod.',
  },
  {
    id: 3,
    title: 'PMPL',
    announcer: 'Dosen 3',
    date: '21/2/2023 14:00',
    body: 'Im not sure if your scenario is exactly the same as one I encountered on a project a few months ago, but I noticed that I had to add a margin/padding (depends on what you prefer) to lift the bottom of the scrollable container. This was usually because a parent container seemed to interfere with the styling of the scrollable elemen',
  },
  {
    id: 4,
    title: 'PMPL',
    announcer: 'Dosen 4',
    date: '21/2/2023 14:00',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam animi cum illo. Sequi hic vero accusantium ipsa eaque, assumenda necessitatibus dolore quasi laudantium laboriosam quibusdam porro dignissimos iusto quod.',
  },
  {
    id: 5,
    title: 'PMPL',
    announcer: 'Dosen 5',
    date: '21/2/2023 14:00',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam animi cum illo. Sequi hic vero accusantium ipsa eaque, assumenda necessitatibus dolore quasi laudantium laboriosam quibusdam porro dignissimos iusto quod.',
  },
];
const Info = () => {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOnItemPress = info => {
    setModalData(info);
    setVisible(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ModalInfo
        onPress={() => setVisible(false)}
        onRequestClose={() => setVisible(false)}
        data={modalData}
        visible={visible}
      />
      <FlatList
        data={data}
        style={styles.list}
        contentContainerStyle={styles.containerList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <InfoCard data={item} key={item.id} onPress={handleOnItemPress} />
        )}
      />
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  list: {
    flex: 1,
  },
  containerList: {
    top: 20,
    gap: 15,
    paddingBottom: 30,
    paddingHorizontal: 17,
  },
});
