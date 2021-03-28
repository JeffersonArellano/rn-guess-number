import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../../components/common/card/Card';
import Input from '../../components/common/input/Input';
import Colors from '../../constants/colors';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          keyboardType='number-pad'
          maxLength={2}
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button color={Colors.accent} title='Reset' onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button
              color={Colors.primaryColor}
              title='Confirm'
              onPress={() => {}}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  inputContainer: {
    width: '90%',
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
