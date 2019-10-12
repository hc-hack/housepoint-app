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
  TextInput
} from 'react-native';

export default function LoginScreen() {
  return (
    <>
      <TextInput style={styles.email} value="email" />
      <TextInput
        secureTextEntry={true}
        password={true}
        style={styles.password}
        value="password"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  email: {},
  password: {}
});
