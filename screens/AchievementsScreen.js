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
  Dimensions
} from 'react-native';

export default function AchievementsScreen() {
  return (
    <>
      <View>
        <Text Style={styles.titleInfoText}>Your Acheivements</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

AchievementsScreen.navigationOptions = {
  header: 'null'
};
