import React, { Component } from 'react';

import { View, Button, FlatList, Text, StyleSheet, TextInput }
  from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

export class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Your shared buylist',
  })
  constructor(props) {
    super(props)
    this.state = {itemToAdd: ''}
  }
  addBuylist(item) {
    this.props.addBuylist(item)
  }
  objWithKey(el) {
    return {
      'key': el,
    }
  }
  render() {
    const { navigate, goBack } = this.props.navigation
    const username = this.props.navigation.state.username
    const password = this.props.navigation.state.password
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.buylists.map(el => this.objWithKey(el))}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
        <Button title='Send back to Login'
            style={styles.row}
            onPress={() => goBack()} />
        <View style={styles.row}>
          <Text style={styles.textlabel}>
            Add buylist
          </Text>
          <TextInput
            style={styles.textinput} placeholder="item"
            onChangeText={(itemToAdd) => {
              this.setState({itemToAdd})
            }}/>
        </View>
        <Button style={styles.row}
          title="Add"
          onPress={() => this.addBuylist(this.state.itemToAdd)}/>
      </View>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    buylists: state.buylists,
  }
}, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
