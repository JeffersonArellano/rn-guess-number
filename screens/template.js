import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const componentName = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '100%',
  },
});

export default componentName;
