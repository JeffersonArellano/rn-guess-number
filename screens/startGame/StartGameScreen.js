import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import {
  Card,
  Input,
  NumberContainer,
  BodyText,
  TitleText,
  MainButton,
} from '../../components/common/index';

import Colors from '../../constants/colors';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [userConfirmed, setUserConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setUserConfirmed(!userConfirmed);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Accept', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    setUserConfirmed(!userConfirmed);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmOutput;

  if (userConfirmed) {
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You Selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>

        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            keyboardType='number-pad'
            maxLength={2}
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title='Reset'
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primaryColor}
                title='Confirm'
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },

  inputContainer: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center',
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
    margin: 5,
  },
  input: {
    width: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    margin: 4,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
