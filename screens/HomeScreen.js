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
  StatusBar
} from 'react-native';

import { MonoText } from '../components/StyledText';


const userData = {
  steps: 76,
  goals: 100,
  tasks: [
    {
      title: "Take the bins out",
      points: 10
    },
    {
      title: "Cook a healthy meal",
      points: 15
    },
    {
      title: "Complete 5000 steps",
      points: 30
    },
    {
      title: "Complete 5000 steps",
      points: 30
    }
  ],
  "placement": 1,
  "league": "house 42"
};


const HomeScreen = () => {
  return (
    <>
      <View style={styles.pointDashboardContainer}>
        <Text style={styles.pointDashboardInfoText}>
          {userData.steps}
        </Text>
        <Text style={{ position: 'absolute', top: 125, fontSize: 15, color: 'rgba(192, 169, 231, 1)' }}>
          STEPS
        </Text>
        <Text style={{ position: 'absolute', top: 140, fontSize: 30, color: 'rgba(80,158,140,1)' }}>
          {user_data["goals"]}
        </Text>
        <Text style={{ position: 'absolute', top: 180, fontSize: 15, color: 'rgba(80,158,140,1)' }}>
          GOALS
        </Text>
        <Image source={require('../assets/images/slider.png')} style={styles.icon} />
      </View>
      {userData.tasks.map((task) => (
        <View style={styles.taskContainer}>
          <Text style={styles.taskInfoText}>
            {task.title}
          </Text>
        </View>
      ))}
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          {user_data["placement"]} in {user_data["league"]}
        </Text>
      </View>
    </>
  );
}

let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87FBFB',
  },


  // may use this style later

  logoInfoText: {
    fontSize: 40,
    top: -30,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
  },
  icon: {
    position: "absolute",
    top: (35),
    bottom: (35),
    left: (screenWidth - 200) / 2,
    right: (screenWidth - 200) / 2,
    maxWidth: 200,
    maxHeight: 200,
  },
  pointDashboardContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    alignItems: 'center',
    paddingVertical: 100,
  },
  pointDashboardInfoText: {
    fontSize: 50,
    color: 'rgba(192, 169, 231, 1)',
    position: "absolute",
    top: 60,
  },
  taskContainer: {
    position: 'relative',
    top: 250,
    bottom: 50,
    left: 0,
    right: 0,
    padding: 30,
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(80,158,140,1)',
    paddingVertical: 10,
    borderRadius: 10,
  },
  taskInfoText: {
    fontSize: 20,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(192,169,231,1)',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },


});

export default HomeScreen;