import React, {useEffect} from 'react';
import {View, StyleSheet, Alert, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {planFetch, planSelect} from '../../actions/plan';
import {Header} from '../../Components/header';
import {Title} from '../../Components/title';
import globalStyles from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ArrowSvg} from '../../assets/svg/Arrow';

const PlanItem = ({item: plan, position, navigation}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(planSelect({plan, position}));
        navigation.push('Register');
      }}
      style={styles.planItem}>
      <Text style={styles.plan}>{plan.plan}</Text>
      <View style={styles.speedGroup}>
        <View style={styles.speedItem}>
          <ArrowSvg style={styles.arrow} color={globalStyles.GREEN_COLOR} />
          <Text style={styles.speed}>2 Mb</Text>
        </View>
        <View style={styles.speedItem}>
          <ArrowSvg
            style={styles.arrow}
            direction="bottom"
            color={globalStyles.GREEN_COLOR}
          />
          <Text style={styles.speed}>1 Mb</Text>
        </View>
      </View>
      <Text style={styles.month}>Precio Mes</Text>
      <View style={styles.pricing}>
        <Text style={styles.dollarPrice}>${plan.precio.split('USD')[0]}</Text>
        <Text style={styles.bsPrice}>/ Bs 1.000.000</Text>
      </View>
    </TouchableOpacity>
  );
};

export function PlanSelectScreen({navigation}) {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.data);
  const message = useSelector((state) => state.auth.message);

  useEffect(() => {
    dispatch(planFetch());
  }, [dispatch]);
  useEffect(() => {
    if (message !== '') {
      Alert.alert('Registro', message);
    }
  }, [message]);

  return (
    <View style={styles.view}>
      <Header navigation={navigation} />
      <Title text={'Planes de Internet'} />
      <View style={styles.scroll}>
        <FlatList
          horizontal
          data={plans}
          renderItem={(props) => (
            <PlanItem {...props} navigation={navigation} />
          )}
          keyExtractor={(plan) => `plan-item-${plan.id}`}
        />
      </View>
      <Text numberOfLines={2} style={styles.lowText}>
        Seleccione el plan de tu preferencia
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.BACKGROUND_BOTOM,
    flex: 1,
    alignItems: 'center',
  },
  planItem: {
    display: 'flex',
    backgroundColor: globalStyles.GRAY_COLOR,
    margin: 15,
    padding: 15,
    borderRadius: 15,
    height: '80%',
    width: 233,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    width: 45,
    height: 45,
  },
  speedGroup: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  pricing: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: globalStyles.PRIMARY_COLOR,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarPrice: {
    color: globalStyles.WHITE_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
  bsPrice: {
    color: globalStyles.WHITE_COLOR,
    textAlignVertical: 'center',
  },
  speedItem: {},
  month: {
    color: globalStyles.GRAY_TEXT_COLOR + '50',
    textTransform: 'uppercase',
  },
  speed: {
    color: globalStyles.GRAY_TEXT_COLOR,
  },
  plan: {
    color: globalStyles.PRIMARY_COLOR,
    fontSize: 68,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  lowText: {
    color: globalStyles.WHITE_COLOR,
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',
    width: 180,
    margin: 'auto',
    textAlign: 'center',
  },
  scroll: {
    height: 300,
  },
});
