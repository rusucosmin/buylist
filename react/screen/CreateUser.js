import React, { Component } from 'react';

import { View, Button, TextInput, Text, StyleSheet, Alert }
  from 'react-native'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'

import DatePicker from 'react-native-datepicker'

var SendIntentAndroid = require('react-native-send-intent')

class CreateUserScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Create user',
  })
  constructor(props) {
    super(props)
    today = new Date()
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
    }
  }
  addUser() {
    if(this.state.password != this.state.confirm_password) {
      Alert.alert(
        'Create user',
        'Password does not match',
      )
      return
    }
    this.props.addUser(this.props.user.jwt,
        this.state.email, this.state.password)
    this.props.navigation.navigate('Users')
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Create User</Text>
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            Email
          </Text>
          <TextInput
            style={styles.textinput} placeholder="user@example.com"
            onChangeText={(email) => this.setState({email})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Password</Text>
          <TextInput style={styles.textinput}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Confirm Password</Text>
          <TextInput style={styles.textinput}
            secureTextEntry={true}
            onChangeText={(confirm_password) => this.setState({confirm_password})} />
        </View>
        <Button style={styles.row}
          title = "Create"
          onPress={() => this.addUser()}/>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    user: state.user
  }
}, mapDispatchToProps)(CreateUserScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
