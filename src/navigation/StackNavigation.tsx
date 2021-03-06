import React from 'react';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {Movie} from '../interfaces/movieInterface';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Home: undefined;
  Details: Movie;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
