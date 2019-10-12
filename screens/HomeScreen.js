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
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (

    <>
      <View style={styles.pointDashboardContainer}>
        <Text style={styles.pointDashboardInfoText}>
          score
        </Text>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.taskInfoText}>
          task1
        </Text>
      </View>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          [Edit this to receive data from league]
        </Text>
      </View>


    </>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87FBFB',
  },
  pointDashboardContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    alignItems: 'center',
    backgroundColor: 'rgba(170,170,170,100)',
    paddingVertical: 100,
  },
  pointDashboardInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  taskContainer: {
    position: 'relative',
    left: 0,
    right: 0,

    alignItems: 'center',
    backgroundColor: 'rgba(170,170,170,100)',
    paddingVertical: 10,
  },
  taskInfoText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },

});
