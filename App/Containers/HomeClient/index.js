import React, {useEffect} from 'react';
import {ScrollView, View, Text, StatusBar, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {servicioFetch} from '../../actions/servicio';

const HomeClientScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicioFetch());
  }, [dispatch]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Tabs nextline</Text>
        </View>
        <View>
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
        <View>
          <Button
            title="Go to Plans"
            onPress={() => navigation.navigate('Plans')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeClientScreen;
