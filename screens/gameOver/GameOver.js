import React from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';
import DefaulStyles from '../../constants/default-styles';
import { BodyText, TitleText, MainButton } from '../../components/common/index';

const GameOverScreen = ({ roundsNumber, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/success.png')}
          // source={{
          //   uri:
          //     'https://michiganvirtual.org/wp-content/uploads/2019/06/iStock-1058845292-1024x684.jpg',
          // }}
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your device needed
          <Text style={styles.highlight}> {roundsNumber} </Text> rounds to guess
          the number <Text style={styles.highlight}> {userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onNewGame}>NEW GAME </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 10,
  },
  highlight: {
    color: Colors.primaryColor,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;
