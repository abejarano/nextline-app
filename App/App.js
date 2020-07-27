import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {configStore} from './reducers/store';
import LoginNavigator from './Navigators/LoginNavigator';
import TabsNavigator from './Navigators/TabsNavigator';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <Provider store={configStore()}>
      {isLoggedIn ? <TabsNavigator /> : <LoginNavigator />}
    </Provider>
  );
};

export default App;
