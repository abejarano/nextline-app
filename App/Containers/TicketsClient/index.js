import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthHeader} from '../../Components/authHeader';
import {StyledStatusBar} from '../../Components/statusBar';
import {scale, verticalScale} from '../../utils';

export const TicketsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safe}>
      <StyledStatusBar />
      <ImageBackground
        source={require('../../assets/images/wallpapers/profile.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <AuthHeader
          backVisble
          navigation={navigation}
          title="Asistencia Tecnica"
        />
        <View style={styles.view}>
          <StatusBar barStyle="dark-content" />
          <TouchableOpacity
            onPress={() => {
              navigation.push('TicketsCreateClient');
            }}>
            <Text style={styles.title}>Crear un Nuevo Ticket</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Histórico de tickets</Text>

          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={TickectItem}
              // horizontal={true}
              contentContainerStyle={styles.scrollView}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const TickectItem = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.itemChild}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemMotive}>
        {(item.motivo || 'intenrnet nletooassssssssssssssssssss').substr(0, 14)}
        {(item?.motivo?.length() ||
          'intenrnet nletooassssssssssssssssssss'.length) > 14 && ' . . .'}
      </Text>
    </View>
    <View style={[styles.itemChild, styles.itemChild2]}>
      <Text
        style={[
          styles.itemStatus,
          {backgroundColor: statusColors[getStatusColor(item.status)]},
        ]}>
        {getStatusLabel(item.status)}
      </Text>
      <Text style={styles.itemDate}>
        {item.fecha || new Date().toISOString().split('T')[0]}
      </Text>
    </View>
  </TouchableOpacity>
);

const statusColors = ['#52C0F2', '#FFD401', '#FF7800', '#D571FF'];
const getStatusColor = (status) => {
  switch (status) {
    case 'a':
      return 0;
    case 'b':
      return 1;
    case 'c':
      return 2;
    case 'd':
      return 3;
  }
};
const getStatusLabel = (status) => {
  switch (status) {
    case 'a':
      return 'Atención en curso';
    case 'b':
      return 'Pendiente por atención';
    case 'c':
      return 'Técnico Asignado';
    case 'd':
      return 'Pendiente soporte técnico';
  }
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    paddingTop: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(14),
    color: globalStyles.PRIMARY_COLOR_DARK,
    textTransform: 'uppercase',
    fontFamily: globalStyles.POPPINS_REGULAR,
    marginVertical: verticalScale(35),
  },
  item: {
    flex: 1,
    maxWidth: '85%',
    minWidth: '85%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    minHeight: scale(80),
    maxHeight: scale(80),
    marginVertical: 10,
    borderRadius: 10,
    ...globalStyles.SHADOW,
    elevation: 15,
  },
  itemChild: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 10,
    // ...globalStyles.DEBUG,
    marginLeft: 15,
    marginRight: -50,
  },
  itemChild2: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginLeft: 0,
  },
  itemTitle: {
    fontFamily: globalStyles.POPPINS_BOLD,
    color: globalStyles.PRIMARY_COLOR_DARK,
    fontSize: scale(16),
  },
  itemMotive: {
    fontFamily: globalStyles.POPPINS_REGULAR,
    fontSize: scale(14),
  },
  itemDate: {
    fontFamily: globalStyles.POPPINS_REGULAR,
    fontSize: scale(12),
  },
  itemStatus: {
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: globalStyles.PRIMARY_COLOR,
    fontFamily: globalStyles.POPPINS_REGULAR,
    fontSize: scale(10),
  },
  scrollView: {
    minWidth: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.DEBUG,
  },
});

export default TicketsScreen;

// export const TicketsScreen = ({navigation}) => {
// 	const tickets = [{id:123, name:'low speed'}, {id:234, name:'too much speed'},  {id:1, name:'testing the chat and ticket'}];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    status: 'c',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    status: 'a',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    status: 'b',
  },
  {
    id: '58694a0f-3da1-271f-bd96-145571e29d72',
    title: 'Third Item',
    status: 'b',
  },
  {
    id: '58694a0f-3da1-271f-bd96-145d71e29d72',
    title: 'asd Item',
    status: 'b',
  },
  {
    id: '58694a0f-3da1-271f-bd96-141871e29d72',
    title: 'last Item',
    status: 'b',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
    status: 'c',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
    title: 'Second Item',
    status: 'a',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    title: 'Third Item',
    status: 'b',
  },
  {
    id: '58694a0f-3da1-271f-bd96-145571e29d721',
    title: 'Third Item',
    status: 'b',
  },
  {
    id: '58694a0f-3da1-271f-bd96-145d71e29d721',
    title: 'asd Item',
    status: 'b',
  },
  {
    id: '58694a0f-3da1-271f-bd96-141871e29d721',
    title: 'last Item',
    status: 'b',
  },
];
