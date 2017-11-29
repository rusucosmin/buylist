import React, { Component } from 'react';

import { View, Button, TextInput, Text, StyleSheet, Alert }
  from 'react-native'

import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'

var SendIntentAndroid = require('react-native-send-intent')

class CreateBuylistScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Create buylist',
  })
  constructor(props) {
    super(props)
    this.state = {id: 0, name: '', description: ''}
  }
  addBuylist() {
    this.props.addBuylist(this.state.id, this.state.name, this.state.description)
    this.props.navigation.navigate('Buylists')
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Create Buylist</Text>
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            ID
          </Text>
          <TextInput
            style={styles.textinput} placeholder="0"
            onChangeText={(id) => this.setState({id})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            Name
          </Text>
          <TextInput
            style={styles.textinput} placeholder="My buylist"
            onChangeText={(name) => this.setState({name})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Description</Text>
          <TextInput style={styles.textinput}
            placeholder="A simple buylist"
            onChangeText={(description) => this.setState({description})} />
        </View>
        <Button style={styles.row}
          title = "Create"
          onPress={() => this.addBuylist()}/>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
  }
}, mapDispatchToProps)(CreateBuylistScreen)


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
