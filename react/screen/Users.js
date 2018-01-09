import React, { Component } from 'react';

import { View, TouchableOpacity, Button, FlatList, Text, StyleSheet, TextInput }
  from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import { ConnectivityRenderer } from 'react-native-offline';

class UsersScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Users',
  })
  static id = ''
  constructor(props) {
    super(props)
    //id = setInterval(() => this.fetchUsers(), 5000)
  }
  addUser(item) {
    this.props.addUser(item)
  }
  fetchUsers() {
    this.props.fetchUsers()
  }
  refresh() {
    if(this.props.offline && this.props.offline.length > 0)
      this.props.retryAction(this.props.offline[0])
    else {
      this.fetchUsers();
    }
  }
  getViewForModel(el) {
    return {
      'key': el.id,
      'email': el.email,
      'role': el.role,
    }
  }
  fetchUsers() {
    this.props.fetchUsers(this.props.user.token)
  }
  clearRetry() {
    this.props.clearRetry()
  }
  focusChanged(focus) {
    console.log("Focus changed for user")
    console.log(focus)
    if(focus) {
      if(UsersScreen.id == '') {
        UsersScreen.id = setInterval(() => this.refresh(), 5000)
        console.log("focus true starting interval " + UsersScreen.id)
      }
    } else {
      if(UsersScreen.id != '') {
        console.log("focus false clearing interval " + UsersScreen.id)
        clearInterval(UsersScreen.id)
        UsersScreen.id = ''
      }
    }
  }
  getCurrentRouteName() {
    return this.props.nav.routes[this.props.nav.index].routeName
  }
  render() {
    this.focusChanged(this.getCurrentRouteName() == 'Users')
    const { navigate, goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <ConnectivityRenderer>
          {isConnected => (
            isConnected ? (
              <Text>Online</Text>
            ) : (
              <Text>Offline mode</Text>
            )
          )}
        </ConnectivityRenderer>
        <FlatList
            data={this.props.users.map(el => this.getViewForModel(el))}
            renderItem={({item}) =>
              <TouchableOpacity onPress={() => {
                navigate('EditUser', {selected_item: item})
              }}>
                <View style={styles.item}>
                  <Text style={styles.item_email}>{item.email}</Text>
                  <Text style={styles.item_role}>{item.role}</Text>
                </View>
              </TouchableOpacity>
            } />
        <Button style={styles.row}
          title="Add user"
          onPress={() => navigate('CreateUser')}/>
        <Button style={styles.row}
          title="Refresh users"
          onPress={() => this.fetchUsers()}/>
        <Button style={styles.row}
          title="Clear"
          onPress={() => this.clearRetry()}/>
      </View>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    users: state.users,
    user: state.user,
    nav: state.nav,
    offline: state.offline,
  }
}, mapDispatchToProps)(UsersScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  textlabel: {
    fontSize: 20,
    flex: 1,
  },
  textinput: {
    flex: 2,
    fontSize: 20,
  },
  h1: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  h2: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    margin: 10,
  },
  item_email: {
    fontSize: 20,
  },
  item_role: {
    fontSize: 15,
  },
})
