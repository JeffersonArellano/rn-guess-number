import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/common/header/Header';
import { StartGameScreen } from './screens/index';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a number' />
      <StartGameScreen text='The text' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
