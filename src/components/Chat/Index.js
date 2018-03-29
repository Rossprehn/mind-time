import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../Basic/Header'
import Chat from './Chat'

export default class ChatIndex extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Mind Time Chat'} />
        <Chat />
      </View>
    )
  }
}
