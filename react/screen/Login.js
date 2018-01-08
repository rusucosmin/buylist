import React, { Component } from 'react';

import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import { ConnectivityRenderer } from 'react-native-offline';

var SendIntentAndroid = require('react-native-send-intent')

class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => ({
      title: 'Login',
  })
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      tried: 0,
    }
  }

  login() {
    this.props.login(this.state.email, this.state.password);
  }

  incrementTriedCount() {
    this.setState({tried: this.state.tried + 1})
  }

  render() {
    const { dispatch, nav } = this.props
    const { navigate } = this.props.navigation
    const email = this.state.email
    const password = this.state.password
    const token = this.props.user.token
    return (
      <View style={styles.container}>
        {
          this.props.user.login_attempt.error != ""
          &&
          <Text>{this.props.user.login_attempt.error}</Text>
        }
        <Text style={styles.h1}>Login with Splitwise</Text>
        {
          this.props.user.login_attempt.in_progress
          &&
          <View style={styles.row}>
            <ActivityIndicator size="large" color="#0000ff"/>
          </View>
        }
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            Email
          </Text>
          <TextInput
            style={styles.textinput} placeholder="email"
            onChangeText={(email) => this.setState({email})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Password</Text>
          <TextInput style={styles.textinput}
            placeholder="password"
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}/>
        </View>
        <ConnectivityRenderer>
          {isConnected => (
            isConnected ? (
              <Button style={styles.row}
                  title = "Login"
                  onPress={() => { this.login();}}/>
            ) : (
              <Text>Login is disabled since you are offline.</Text>
            )
          )}
        </ConnectivityRenderer>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    user: state.user,
    token: state.user.token
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
