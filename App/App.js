import React from 'react';
import {Provider} from 'react-redux';
import {configStore} from './reducers/store';
import LoginNavigator from './Navigators/LoginNavigator';
import TabsNavigator from './Navigators/TabsNavigator';

const isLoggedIn = false;

const App = () => {
  return (
    <Provider store={configStore()}>
      {isLoggedIn ? <TabsNavigator /> : <LoginNavigator />}
    </Provider>
  );
};

export default App;
