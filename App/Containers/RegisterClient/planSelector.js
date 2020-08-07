import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {planFetch, planSelect} from '../../actions/plan';
import {Header} from '../../Components/header';
import {Title} from '../../Components/title';
import globalStyles from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SpeedGroup} from '../../Components/speedGroup';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from '../../utils';

const PlanItem = ({item: plan, position, navigation}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(planSelect(plan));
        navigation.push('Register');
      }}
      style={styles.planItem}>
      <Text style={styles.plan}>{plan.plan.split(' ').join('')}</Text>
      <SpeedGroup
        upSpeed={plan.velocidad_subida}
        downSpeed={plan.velocidad_baja}
      />
      <Text style={styles.month}>Precio Mes</Text>
      <View style={styles.pricing}>
        <Text style={styles.dollarPrice}>
          ${plan.precio.split('USD')[0].split('.')[0]} /
        </Text>
        <Text style={styles.bsPrice}>
          {' '}
          {plan.precio_bs.split('.')[0] +
            ' ' +
            plan.precio_bs.split('.')[1].split(',').join('.')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export function PlanSelectScreen({navigation}) {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.data);
  const loading = useSelector((state) => state.plans.fetching);

  useEffect(() => {
    dispatch(planFetch());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../assets/images/wallpapers/auth.png')}
        style={globalStyles.BACKGROUNDIMAGE}>
        <View style={styles.view}>
          <Header
            navigation={navigation}
            onPress={() => {
              navigation.goBack();
              dispatch(planSelect(null));
            }}
          />
          <Title text={'Planes de Internet'} />
          <View style={styles.center}>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={globalStyles.WHITE_COLOR}
              />
            ) : (
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
            )}
            <Text style={styles.lowText}>
              Seleccione el plan{'\n'} de tu preferencia
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: globalStyles.PRIMARY_COLOR_DARK,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  planItem: {
    flex: 1,
    backgroundColor: globalStyles.GRAY_COLOR,
    margin: 15,
    padding: 15,
    borderRadius: 15,
    height: 284,
    width: 233,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricing: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalStyles.PRIMARY_COLOR,
    padding: '2.5%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 60,
  },
  dollarPrice: {
    color: globalStyles.WHITE_COLOR,
    fontSize: scale(25),
    marginLeft: 10,
    fontFamily: globalStyles.TREBUCHET_FONT,
  },
  bsPrice: {
    color: globalStyles.WHITE_COLOR,
    textAlignVertical: 'center',
    fontSize: scale(16),
    fontFamily: globalStyles.TREBUCHET_FONT,
    marginRight: 10,
  },

  month: {
    color: globalStyles.GRAY_TEXT_COLOR + '50',
    textTransform: 'uppercase',
    fontSize: scale(10),
    fontFamily: globalStyles.POPPINS_LIGHT,
  },

  plan: {
    color: globalStyles.PRIMARY_COLOR,
    fontSize: scale(64),
    fontFamily: globalStyles.TREBUCHET_BOLD_FONT,
    textTransform: 'uppercase',
  },
  lowText: {
    color: globalStyles.WHITE_COLOR,
    fontSize: scale(21),
    overflow: 'hidden',
    marginTop: 'auto',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginBottom: '20%',
    fontFamily: globalStyles.TREBUCHET_BOLD_FONT,
  },
  scroll: {
    maxHeight: 300,
    flex: 1,
    marginTop: 'auto',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
});
