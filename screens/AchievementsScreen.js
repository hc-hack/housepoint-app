import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';


export default function AchievementsScreen() {
  return (
    <>
      <View><Text>title</Text></View>
      <View><Text>teamname</Text></View>
      <View>
        <Text>player1 500</Text>
        <Text>player2 499</Text>
        <Text>player3 332</Text>
        <Text>player4 322</Text>
        <Text>player5 100</Text>
      </View>
    </>
  );
}

AchievementsScreen.navigationOptions = {
  title: 'app.json',
};
