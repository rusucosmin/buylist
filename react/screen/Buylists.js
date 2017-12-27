import React, { Component } from 'react';

import { View, TouchableOpacity, Button, FlatList, Text, StyleSheet, TextInput }
  from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class BuylistsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Your buylists',
  })
  constructor(props) {
    super(props)
    //this.props.fetchBuylists(this.props.user.jwt)
  }
  addBuylist(item) {
    this.props.addBuylist(item)
  }
  getViewForModel(el) {
    return {
      'key': el.id,
      'name': el.name,
      'description': el.description,
      'date': el.date,
    }
  }
  render() {
    const { navigate, goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.buylists.map(el => this.getViewForModel(el))}
            renderItem={({item}) =>
              <TouchableOpacity onPress={() => {
                console.log("clicked on item:")
                console.log(item)
                navigate('EditBuylist', {selected_item: item})
              }}>
                <View style={styles.item}>
                  <Text style={styles.item_name}>{item.name}</Text>
                  <Text style={styles.item_description}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            } />
        <Button style={styles.row}
          title="Create a new buylist"
          onPress={() => navigate('CreateBuylist')}/>
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
    user: state.user,
  }
}, mapDispatchToProps)(BuylistsScreen)

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
  item_name: {
    fontSize: 20,
  },
  item_description: {
    fontSize: 10,
  },
})
