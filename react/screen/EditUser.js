import React, { Component } from 'react';

import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  Alert
} from 'react-native'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import { NavigationActions } from 'react-navigation'

import DatePicker from 'react-native-datepicker'

class EditUserScreen extends Component {
  static navigationOptions = ({navigation}) => ({
      title: 'Edit user',
  })
  constructor(props) {
    super(props)
    if(!this.props.nav.routes[this.props.nav.index].params) {
      return
    }
    this.state = {
      id: this.props.nav.routes[this.props.nav.index].params.selected_item.key,
      email: this.props.nav.routes[this.props.nav.index].params.selected_item.email,
      role: this.props.nav.routes[this.props.nav.index].params.selected_item.role,
      password: '',
      confirm_password: '',
    }
  }
  updateUser() {
    if (this.state.password != this.state.confirm_password) {
      Alert.alert(
        'Update user',
        'Password does not match',
      )
      return
    }
    this.props.updateUser(
        this.props.user.token,
        this.state.id,
        this.state.email,
        this.state.role,
        this.state.password,
    )
    const navigateAction = NavigationActions.navigate({
      routeName: 'Users',
      params: {},
    })
    this.props.navigation.dispatch(navigateAction)
  }
  deleteUser() {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete '
          + this.state.email + '?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => {
          this.deleteUserConfirmed();
        }},
      ],
      { cancelable: false }
    )
  }
  deleteUserConfirmed() {
    this.props.deleteUser(
      this.props.user.token,
      this.state.id
    )
    const navigateAction = NavigationActions.navigate({
      routeName: 'Users',
      params: {},
    })
    this.props.navigation.dispatch(navigateAction)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Edit User</Text>
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            ID
          </Text>
          <TextInput
            style={styles.textinput}
            value={this.state.id.toString()}
            onChangeText={(id) => this.setState({id})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            Email
          </Text>
          <TextInput
            style={styles.textinput}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Role</Text>
          <TextInput style={styles.textinput}
            value={this.state.role}
            onChangeText={(role) => this.setState({role})} />
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
          title = "Update"
          onPress={() => this.updateUser()}/>
        <Button style={styles.row}
          title = "Delete"
          onPress={() => this.deleteUser()}/>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    nav: state.nav,
    user: state.user,
  }
}, mapDispatchToProps)(EditUserScreen)


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
  chart: {
    width: 200,
    height: 200,
  },
})
