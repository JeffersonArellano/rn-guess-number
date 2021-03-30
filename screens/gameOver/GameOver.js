import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from './GameOverStyle';
import { BodyText, TitleText, MainButton } from '../../components/common/index';

const GameOverScreen = ({ roundsNumber, userNumber, onNewGame }) => {
  return (
    <ScrollView>
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
            <Text style={styles.highlight}> {roundsNumber} </Text> rounds to
            guess the number <Text style={styles.highlight}> {userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={onNewGame}>NEW GAME </MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
