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

export default function LeagueScreen() {
  return (
    <>
      <View>
        <Text style={styles.textTitle}>
          Title
        </Text>
      </View>
      <View>
        <Text>teamname</Text>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  titleText: { position: 'absolute', top: 125, fontSize: 15, color: 'rgba(192, 169, 231, 1)', },
  subtitleText: {},
  table: {},
  row: {},
});