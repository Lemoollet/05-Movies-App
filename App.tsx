import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import FadeScreen from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

export default App;
