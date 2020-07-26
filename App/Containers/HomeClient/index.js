import React from 'react';
import { ScrollView,  View,  Text,  StatusBar, Button,} from 'react-native';

function HomeClientScreen({ navigation }){
	return(
		<>
			<StatusBar barStyle="dark-content" />
			{/* <SafeAreaView> */}
				<ScrollView
					contentInsetAdjustmentBehavior="automatic">
					<View >
						<Text >Tabs nextline</Text>
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
			{/* </SafeAreaView> */}
		</>
	)
}

export default HomeClientScreen;