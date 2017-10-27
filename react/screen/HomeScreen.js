import React, { Component } from 'react';

import { View, Button, FlatList, Text, StyleSheet }
  from 'react-native'

export class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Your shared buylist',
  })
  render() {
    const { navigate, goBack } = this.props.navigation
    const username = this.props.navigation.state.username
    const password = this.props.navigation.state.password
    return (
      <View style={styles.container}>
        <FlatList
            data={[
              {key: 'Toilet Paper'},
              {key: 'Lightbulp'},
              {key: 'Milk'},
              {key: 'Eggs'},
              {key: 'Bread'},
              {key: 'Plain water'},
              {key: 'Mineral water'},
              {key: 'Chicken breast'},
              {key: 'Butter'},
              {key: 'Ustensils'},
              {key: 'Salt'},
              {key: 'Pepper'},
              {key: 'Paper Towel'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
        <Button title='Send back to Login'
            style={styles.row}
            onPress={() => goBack()} />
      </View>
    )
  }
}

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
