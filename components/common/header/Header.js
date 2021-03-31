import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../../constants/colors';
import TitleText from '../titleText/TitleText';

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : '#FFFF2E',
    borderBottomWidth: Platform === 'ios' ? 2 : 4,
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerIOS: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    backgroundColor: 'white',
  },
  headerAndroid: {
    borderBottomColor: '#FFFF2E',
    borderBottomWidth: 4,
    backgroundColor: Colors.primaryColor,
  },
  headerTitle: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'open-sans-bold',
  },
  title: {
    color: Platform.OS === 'android' ? 'white' : 'black',
  },
});

export default Header;
