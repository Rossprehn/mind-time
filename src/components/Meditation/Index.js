import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Basic/Header'
import Meditations from './Meditations'

export default class MeditationsIndex extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Full Meditations List'} />
        <Meditations />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
