import React from 'react';
import LoginNavigator from './Navigators/LoginNavigator';
import TabsNavigator from './Navigators/TabsNavigator';

const isLoggedIn = false;

const App = () => {
	if (isLoggedIn) {
		return (
			<TabsNavigator/>
		);
	}else{
		return (
			<LoginNavigator/>
		);	
	}
};

export default App;
