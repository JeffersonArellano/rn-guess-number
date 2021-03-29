import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  [enteredValue, setEnteredValue] = useState('');

  return (
    <View>
      <TextInput style={{ ...styles.input, ...props.style }} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRadius: 4,
    margin: 3,
    padding: 3,
  },
});

export default Input;
