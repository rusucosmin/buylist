import React, { Component } from 'react';

import { View, Button, TextInput, Text, StyleSheet, Alert, TouchableHighlight }
  from 'react-native'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'

var SendIntentAndroid = require('react-native-send-intent')

class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => ({
      title: 'Login',
  })
  constructor(props) {
    super(props)
    this.state = {username: '', password: '', tried: 0}
  }

  login() {
    this.props.login();
  }

  incrementTriedCount() {
    this.setState({tried: this.state.tried + 1})
  }

  render() {
    const { dispatch, nav } = this.props
    const { navigate } = this.props.navigation
    const username = this.state.username
    const password = this.state.password
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Login with Splitwise</Text>
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            Username
          </Text>
          <TextInput
            style={styles.textinput} placeholder="username"
            onChangeText={(username) => this.setState({username})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Password</Text>
          <TextInput style={styles.textinput}
            placeholder="password"
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}/>
        </View>
        <Button style={styles.row}
          title = "Login"
          onPress={() => { this.login(); navigate('Buylists', {username, password}) }}/>
        <Button style={styles.row}
          title = "Send email"
          onPress={() => SendIntentAndroid.sendMail("cr.rusucosmin@gmail.com",
            "Credentials", "username: " + username + ", password: " + password)}/>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    loginAttempts: state.loginAttempts,
  }
}, mapDispatchToProps)(LoginScreen)

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
