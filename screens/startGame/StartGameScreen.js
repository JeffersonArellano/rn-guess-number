import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import styles from './StartGameScreenStyle';
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
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 3
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

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
    <ScrollView>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={30}>
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
                <View style={{ ...styles.button, width: buttonWidth }}>
                  <Button
                    color={Colors.accent}
                    title='Reset'
                    onPress={resetInputHandler}
                  />
                </View>
                <View style={{ ...styles.button, width: buttonWidth }}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
