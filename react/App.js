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
  addNavigationHelpers,
} from 'react-navigation';
import BuylistsScreen from './screen/Buylists'
import EditBuylistScreen from './screen/EditBuylist'
import LoginScreen from './screen/Login'
import CreateBuylistScreen from './screen/CreateBuylist'
import {connect} from 'react-redux'

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Buylists: { screen: BuylistsScreen },
  EditBuylist: { screen: EditBuylistScreen },
  CreateBuylist: { screen: CreateBuylistScreen },
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
})

const AppWithNavigationState = connect(mapStateToProps)(App)

export default AppWithNavigationState
