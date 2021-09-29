import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParamsList = {
  Home: undefined;
  Details: Movie;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
