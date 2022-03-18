import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AppInfo = ({ style }) => {
  return <View style={[styles.info, style]}>
    <Text style={styles.text}>AppInfo</Text>
  </View>
};

const styles = StyleSheet.create({
  info: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
});

export default AppInfo;
