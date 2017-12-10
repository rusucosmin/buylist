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

class EditBuylistScreen extends Component {
  static navigationOptions = ({navigation}) => ({
      title: 'Edit buylist',
  })
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.nav.routes[this.props.nav.index].params.selected_item.key,
      name: this.props.nav.routes[this.props.nav.index].params.selected_item.name,
      description:
      this.props.nav.routes[this.props.nav.index].params.selected_item.description,
      date:
      this.props.nav.routes[this.props.nav.index].params.selected_item.date || "",
    }
    console.log(this.state.id)
    console.log(this.state.name)
    console.log(this.state.description)
    console.log(this.state.date)
  }
  updateBuylist() {
    this.props.updateBuylist(
        this.state.id,
        this.state.name,
        this.state.description,
        this.state.date,
    )
    const navigateAction = NavigationActions.navigate({
      routeName: 'Buylists',
      params: {},
    })
    this.props.navigation.dispatch(navigateAction)
  }
  deleteBuylist() {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete '
          + this.state.name + '?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () =>  {
          this.deleteBuylistConfirmed();
        }},
      ],
      { cancelable: false }
    )
  }
  deleteBuylistConfirmed() {
    this.props.deleteBuylist(
      this.state.id
    )
    const navigateAction = NavigationActions.navigate({
      routeName: 'Buylists',
      params: {},
    })
    this.props.navigation.dispatch(navigateAction)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Edit Buylist</Text>
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
            Name
          </Text>
          <TextInput
            style={styles.textinput}
            value={this.state.name}
            onChangeText={(name) => this.setState({name})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Description</Text>
          <TextInput style={styles.textinput}
            value={this.state.description}
            onChangeText={(description) => this.setState({description})} />
        </View>
        <View style={styles.row}>
          <Text style={styles.textlabel}>Date</Text>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2020-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {
              console.log(date)
              this.setState({date: date})
            }} />
        </View>
        <Button style={styles.row}
          title = "Update"
          onPress={() => this.updateBuylist()}/>
        <Button style={styles.row}
          title = "Delete"
          onPress={() => this.deleteBuylist()}/>
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
  }
}, mapDispatchToProps)(EditBuylistScreen)


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
