import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux} from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({
      port: 9090,
      //   host: '10.0.0.3',
    })
    .use(reactotronRedux())
    .useReactNative({
      // Yours configs
    })
    .connect();

  tron.clear();

  console.tron = tron;
}
