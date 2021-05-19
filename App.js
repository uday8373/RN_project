/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import UserForm from './Components/userForm';
import { NavigationContainer } from '@react-navigation/native';
import {Navigation} from './Navigation/navigation'

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // backgroundColor: '#000'
  },
  headText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    color: '#fff',
    fontSize: 20
  }
})

export default App;
