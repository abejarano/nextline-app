import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {planFetch, planSelect} from '../../actions/plan';
import {Header} from '../../Components/header';
import {Title} from '../../Components/title';
import globalStyles from '../../styles';

const PlanItem = ({plan, position}) => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(planSelect({plan, position}));
      }}
      title={plan.plan}
    />
  );
};

export function PlanSelectScreen({navigation}) {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plans.data);
  const message = useSelector((state) => state.auth.message);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [position, setPosition] = useState(false);

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
      {plans.map((plan) => {
        return (
          <PlanItem
            key={`plan-item-${plan.id}`}
            plan={plan}
            position={position}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: globalStyles.BACKGROUND_BOTOM,
    flex: 1,
    alignItems: 'center',
  },
});
