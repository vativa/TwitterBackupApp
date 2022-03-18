import React, { useState, useEffect } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

const EDIT_USER = 'EDIT_USER';
const EDIT_PASS = 'EDIT_PASS';

const useReducer = (reducer, initState) => {
  const [state, setState] = useState(initState);
  const dispatch = (action) => setState(reducer(state, action));
  return [state, dispatch];
};

const reducer = (state, action) => {
  switch (action.type) {
    case EDIT_USER: return { ...state, user: action.payload };
    case EDIT_PASS: return { ...state, pass: action.payload };
    default: return state;
  }
};

const LoginForm = ({ style }) => {
  const [{ user, pass }, dispatch] = useReducer(reducer, { user: null, pass: null });
  
  useEffect(() => {
    console.log('>>> login state ', user, pass);
  }, [style, user, pass]);
  
  return <View style={[styles.form, style]}>
    <Text style={[styles.text, styles.label]}>Twitter Login</Text>
    <TextInput
      placeholder="Username"
      autoFocus
      value={user}
      onChangeText={payload => dispatch({ type: EDIT_USER, payload })}
      autoCapitalize="none"
      autoCorrect={false}
      style={[styles.input, styles.text]}
    />
    <TextInput
      placeholder="Password"
      secureTextEntry
      value={pass}
      onChangeText={payload => dispatch({ type: EDIT_PASS, payload })}
      autoCapitalize="none"
      autoCorrect={false}
      style={[styles.input, styles.text]}
    />
    <Button title="Submit" onPress={(e) => console.log('>>> button pressed ', e)} />
  </View>
};

const styles = StyleSheet.create({
  form: {
    borderColor: 'skyblue',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
  },
  label: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderColor: '#777',
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default LoginForm;
