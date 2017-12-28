/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import LoginScreen from './screen/Login'

import BuylistsScreen from './screen/Buylists'
import CreateBuylistScreen from './screen/CreateBuylist'
import EditBuylistScreen from './screen/EditBuylist'

import UsersScreen from './screen/Users'
import CreateUserScreen from './screen/CreateUser'
import EditUserScreen from './screen/EditUser'

import { connect } from 'react-redux'

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Buylists: {
    screen: TabNavigator({
      Buylists: { screen: BuylistsScreen },
      CreateBuylist: { screen: CreateBuylistScreen },
    }, {
      order: ['Buylists', 'CreateBuylist'],
      animationEnabled: true,
    }),
  },
  EditBuylist: { screen: EditBuylistScreen },
  Users: { screen: UsersScreen },
  CreateUser: { screen: CreateUserScreen },
  EditUser: { screen: EditUserScreen },
});

class App extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
  user: state.user,
})

const AppWithNavigationState = connect(mapStateToProps)(App)

export default AppWithNavigationState
