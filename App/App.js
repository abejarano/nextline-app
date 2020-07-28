import React from 'react';
import {Provider} from 'react-redux';
import {configStore} from './reducers/store';
import {MainNavigator} from './Navigators/index';

const App = () => {
  return (
    <Provider store={configStore()}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
