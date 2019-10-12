import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LeagueScreen from '../screens/LeagueScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LeagueStack = createStackNavigator(
  {
    League: LeagueScreen,
  },
  config
);

LeagueStack.navigationOptions = {
  tabBarLabel: 'League',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cloud' : 'md-cloud'} />
  ),
};

LeagueStack.path = '';

const AchievementsStack = createStackNavigator(
  {
    Achievements: AchievementsScreen,
  },
  config
);

AchievementsStack.navigationOptions = {
  tabBarLabel: 'Acheivements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

AchievementsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LeagueStack,
  AchievementsStack,
});

tabNavigator.path = '';

export default tabNavigator;
