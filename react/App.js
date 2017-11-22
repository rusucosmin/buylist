/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Text, StyleSheet, Image, View, TextInput, Button, FlatList,
  SectionList } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
});

export default App
