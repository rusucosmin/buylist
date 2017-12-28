import React, { Component } from 'react';

import { View, TouchableOpacity, Button, FlatList, Text, StyleSheet, TextInput }
  from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class UsersScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Users',
  })
  constructor(props) {
    super(props)
  }
  addUser(item) {
    this.props.addUser(item)
  }
  getViewForModel(el) {
    return {
      'key': el.id,
      'email': el.email,
      'role': el.role,
    }
  }
  render() {
    const { navigate, goBack } = this.props.navigation
    return (
      <View style={styles.container}>
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
