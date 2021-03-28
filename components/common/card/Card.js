import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 6,
    padding: 10,
    borderRadius: 10,
    margin: 2,
    justifyContent: 'flex-end',
  },
});

export default Card;
