import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const componentName = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF2E',
    height: '20%',
  },
});

export default componentName;
