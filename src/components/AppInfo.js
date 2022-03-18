import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AppInfo = ({ style }) => {
  const [packageJson, setPackageJson] = useState(null);
  
  useEffect(() => {
    const packageJson = require('../../package.json');
    console.log('>>> ', packageJson);
    setPackageJson(packageJson);
  });
  
  return <View style={[styles.info, style]}>
    <Text style={styles.text}>
    {packageJson ? `${packageJson.name} v${packageJson.version}` : "BootstrapBackupApp"}
    </Text>
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
    fontWeight: 'bold',
  }
});

export default AppInfo;
