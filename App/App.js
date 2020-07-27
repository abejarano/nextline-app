import React from 'react';
import {Provider} from 'react-redux';
import {configStore} from './reducers/store';
import {MainNavigator} from './Navigators/TabsNavigator';

const App = () => {
  return (
    <Provider store={configStore()}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
