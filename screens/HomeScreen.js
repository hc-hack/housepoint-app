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
      <View style={styles.pointDashboardContainer}>
        <Text style={styles.pointDashboardInfoText}>
          score
        </Text>
        <Image source={require('@assets\images\slider.png')} alt={'error'} style={styles.icon}> </Image>
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

let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87FBFB',
  },
  icon: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  pointDashboardContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
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
    top: 250,
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
