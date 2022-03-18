import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LandingScreen = ({}) => {
  return <>
    <Text style={styles.text}>LandingScreen</Text>
  </>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});

export default LandingScreen;
