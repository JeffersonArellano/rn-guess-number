import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return (
    <View>
      <TextInput style={{ ...props.style, ...styles.input }} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 10,
    marginVertical: 4,
  },
});

export default Input;
