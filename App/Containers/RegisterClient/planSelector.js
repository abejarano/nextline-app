import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {planFetch, planSelect} from '../../actions/plan';
import {Header} from '../../Components/header';
import {Title} from '../../Components/title';
import globalStyles from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SpeedGroup} from '../../Components/speedGroup';

const PlanItem = ({item: plan, position, navigation}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(planSelect(plan));
        navigation.push('Register');
      }}
      style={styles.planItem}>
      <Text style={styles.plan}>{plan.plan}</Text>
      <SpeedGroup
        upSpeed={plan.velocidad_subida}
        downSpeed={plan.velocidad_baja}
      />
      <Text style={styles.month}>Precio Mes</Text>
      <View style={styles.pricing}>
        <Text style={styles.dollarPrice}>${plan.precio.split('USD')[0]}</Text>
        <Text style={styles.bsPrice}>/ {plan.precio_bs}</Text>
      </View>
    </TouchableOpacity>
  );
};

export function PlanSelectScreen({navigation}) {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.data);

  useEffect(() => {
    dispatch(planFetch());
  }, [dispatch]);
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
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
      </ImageBackground>
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

  month: {
    color: globalStyles.GRAY_TEXT_COLOR + '50',
    textTransform: 'uppercase',
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
