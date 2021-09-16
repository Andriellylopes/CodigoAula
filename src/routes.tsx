import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Pages/Login';
import Home from './Pages/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login"
				screenOptions={{
					headerShown:false,
				}
				}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;