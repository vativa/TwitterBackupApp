import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BrowserScreen = ({}) => {
  return <>
    <Text style={styles.text}>BrowserScreen</Text>
  </>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});

export default BrowserScreen;
