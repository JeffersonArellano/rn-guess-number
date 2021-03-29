import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import Colors from '../../constants/colors';

const GameOverScreen = ({ roundsNumber, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Over!</Text>
      <Text style={styles.rounds}>Number of rounds : {roundsNumber}</Text>
      <Text style={styles.rounds}>Number was : {userNumber}</Text>
      <Button
        title='NEW GAME'
        color={Colors.primaryColor}
        onPress={onNewGame}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  rounds: {
    color: colors.accent,
  },
});

export default GameOverScreen;
