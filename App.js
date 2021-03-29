import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/common/header/Header';
import { StartGameScreen, GameScreen, GameOverScreen } from './screens/index';

export default function App() {
  const [usernumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (guessRounds) => {
    setGuessRounds(guessRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (usernumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={usernumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={usernumber}
        onNewGame={newGameHandler}
      />
    );
  }

  useEffect(() => {}, [usernumber]);

  return (
    <View style={styles.screen}>
      <Header title='Guess a number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
