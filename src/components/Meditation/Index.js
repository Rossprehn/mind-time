import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Basic/Header'
import Meditations from './Meditations'

import { SearchBar } from 'react-native-elements'

export default class MeditationsIndex extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Full Meditations List'} />
        <SearchBar
          lightTheme
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Find the right meditation"
        />

        <Meditations />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
