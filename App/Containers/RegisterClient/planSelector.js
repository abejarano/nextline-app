import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Item, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {planFetch, planSelect} from '../../actions/plan';

const PlanItem = ({plan}) => {
  const dispatch = useDispatch();
  return (
    <Button
      key={`plan-item-${plan.id}`}
      onPress={() => {
        dispatch(planSelect(plan));
      }}
      title={plan.plan}
    />
  );
};

export function PlanSelectScreen({navigation}) {
  const plans = useSelector((state) => state.plans.data);
  const [isMounted, setMounted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isMounted) {
      dispatch(planFetch());
      setMounted(true);
    }
  }, [isMounted]);

  return (
    <View style={styles.view}>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      {plans.map((plan) => {
        return <PlanItem plan={plan} />;
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
