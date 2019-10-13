// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import TaskPill from '../components/TaskPill';
import { Divider } from 'react-native-elements';
import { CircularProgress } from 'react-native-svg-circular-progress';

const userData = {
  points: 3200,
  pointGoal: 5000,
  tasks: [
    {
      id: 'id1',
      title: 'Take the bins out',
      points: 300
    },
    {
      id: 'id2',
      title: 'Cook a healthy meal',
      points: 300
    },
    {
      id: 'id3',
      title: 'Complete 5000 steps',
      points: 700
    },
    {
      id: 'id4',
      title: 'Complete 5000 steps',

      points: 700
    }
  ],
  placement: 1,
  league: 'house 42'
};

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.circularProgress}>
        <Text style={styles.titleText}>Daily Point Progress</Text>
        <CircularProgress
          donutColor="rgb(192, 169, 231)"
          progressWidth={150}
          size={350}
          percentage={(userData.points / userData.pointGoal) * 100}
        >
          <Text style={styles.progressCircleText}>
            {userData.points} Points
          </Text>
          <Text style={styles.progressCircleSubtext}>
            Point Goal: {userData.pointGoal}
          </Text>
        </CircularProgress>
      </View>
      {/* <Divider style={styles.divider} /> */}
      <View style={{ ...styles.activitiesContainer }}>
        {userData.tasks.map(task => (
          <View style={styles.activityPill} key={task.id}>
            <Text style={styles.pillText}>{task.title}</Text>
            <Text style={styles.pillText}>+{task.points} Points</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

let screenWidth = Dimensions.get('window').width;

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    marginTop: 75
  },
  titleText: {
    fontFamily: 'sans-serif-light',
    fontSize: 40,
    marginBottom: 30,
    color: '#444'
  },
  circularProgress: {
    flex: 1,
    alignItems: 'center'
  },
  progressCircleText: {
    fontSize: 45,
    fontFamily: 'sans-serif-light',
    color: '#444'
  },
  progressCircleSubtext: {
    fontSize: 25,
    fontFamily: 'sans-serif-light',
    color: '#444'
  },
  activitiesContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 20
  },
  divider: {
    marginTop: 100,
    marginBottom: 10
  },
  activityPill: {
    flex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 90, height: 90 },
    shadowOpacity: 0.3,
    shadowRadius: 100,
    elevation: 2,
    backgroundColor: 'rgb(80, 158, 140);',
    marginLeft: 50,
    marginRight: 50,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 10
  },
  pillText: {
    color: '#eee',
    justifyContent: 'space-between',
    fontFamily: 'sans-serif-light',
    fontSize: 17
  }
  // container: {
  //   // flex: 1,
  //   // backgroundColor: '#87FBFB'
  // },
  // // may use this style later
  // logoInfoText: {
  //   fontSize: 40,
  //   top: -30,
  //   color: 'rgba(0,0,0,1)',
  //   textAlign: 'center'
  // },
  // icon: {
  //   position: 'absolute',
  //   top: 35,
  //   bottom: 35,
  //   left: (screenWidth - 200) / 2,
  //   right: (screenWidth - 200) / 2,
  //   maxWidth: 200,
  //   maxHeight: 200
  // },
  // pointDashboardContainer: {
  //   position: 'absolute',
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   margin: 0,
  //   alignItems: 'center',
  //   paddingVertical: 100
  // },
  // pointDashboardInfoText: {
  //   fontSize: 50,
  //   color: 'rgba(192, 169, 231, 1)',
  //   position: 'absolute',
  //   top: 60
  // },
  // taskContainer: {
  //   position: 'relative',
  //   // top: 250,
  //   bottom: 50,
  //   left: 0,
  //   right: 0,
  //   padding: 30,
  //   margin: 20,
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(80,158,140,1)',
  //   paddingVertical: 10,
  //   borderRadius: 10
  // },
  // taskInfoText: {
  //   fontSize: 20,
  //   color: 'rgba(0,0,0,1)',
  //   textAlign: 'center'
  // },
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(192,169,231,1)',
  //   paddingVertical: 20
  // },
  // tabBarInfoText: {
  //   fontSize: 20,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center'
  // }
});

export default HomeScreen;
