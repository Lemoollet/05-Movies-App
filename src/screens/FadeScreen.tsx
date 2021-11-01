import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FadeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{backgroundColor: '#084F6a', width: 150, height: 150}} />
    </View>
  );
};

export default FadeScreen;

const styles = StyleSheet.create({});
