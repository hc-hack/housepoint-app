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

import { MonoText } from '../components/StyledText';
/* will woz here*/
export default function HomeScreen() {
  return (

    <>
      <View style={styles.pointDashboardContainer} onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
      }}>

        <Text style={styles.pointDashboardInfoText}>
          76
        </Text>
        <Image source={require('../assets/images/slider.png')} style={styles.icon} />
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.taskInfoText}>
          task1
        </Text>

      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskInfoText}>
          task2
        </Text>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.taskInfoText}>
          task3
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

let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87FBFB',
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
    fontSize: 60,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  taskContainer: {
    position: 'relative',
    top: 250,
    left: 0,
    right: 0,
    padding: 20,
    margin: 20,
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
