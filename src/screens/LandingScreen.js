import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import AppInfo from '../components/AppInfo';
import LoginForm from '../components/LoginForm';
// import { TwitterLogin } from 'react-native-login-twitter';

const LandingScreen = ({}) => {
  return <ScrollView style={styles.container}>
    <AppInfo />
    <LoginForm />
    {/*<TwitterLogin />*/}
  </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LandingScreen;
