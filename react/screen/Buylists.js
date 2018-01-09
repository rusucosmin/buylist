import React, { Component } from 'react';

import { View, TouchableOpacity, Button, FlatList, Text, StyleSheet, TextInput }
  from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import { ConnectivityRenderer } from 'react-native-offline';

class BuylistsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Your buylists',
  })
  static id = ''
  constructor(props) {
    super(props)
  }
  refresh() {
    if(this.props.offline && this.props.offline.length > 0)
      this.props.retryAction(this.props.offline[0])
    else {
      this.fetchBuylists();
    }
  }
  addBuylist(item) {
    this.props.addBuylist(item)
  }
  clearRetry() {
    this.props.clearRetry()
  }
  fetchBuylists() {
    this.props.fetchBuylists(this.props.user.token)
    return true
  }
  getViewForModel(el) {
    return {
      'key': el.id,
      'name': el.name,
      'description': el.description,
      'date': el.date,
    }
  }
  focusChanged(focus) {
    console.log("Focus changed for buylists")
    console.log(focus)
    if(focus) {
      if(BuylistsScreen.id == '') {
        BuylistsScreen.id = setInterval(() => this.refresh(), 5000)
        console.log("focus true starting interval " + BuylistsScreen.id)
      }
    } else {
      if(BuylistsScreen.id != '') {
        console.log("focus false clearing interval " + BuylistsScreen.id)
        clearInterval(BuylistsScreen.id)
        BuylistsScreen.id = ''
      }
    }
  }
  getCurrentRouteName() {
    return this.props.nav.routes[this.props.nav.index].routeName
  }
  render() {
    this.focusChanged(this.getCurrentRouteName() == 'Buylists')
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
        <Button style={styles.row}
            title="Refresh buylist"
            onPress={() => this.fetchBuylists()}/>
        <Button style={styles.row}
            title="Clear"
            onPress={() => this.clearRetry()}/>
        {
          this.props.user.role !== "user"
            &&
          <Button style={styles.row}
            title="Manage users"
            onPress={() => navigate('Users')}/>

        }
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
    offline: state.offline,
    nav: state.nav,
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
