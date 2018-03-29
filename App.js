import React from 'react'
import { Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import MeditationsIndex from './src/components/Meditation/Index'
import HomeIndex from './src/components/Home/Index'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeIndex />
      </View>
    )
  }
}

class MeditationsScreen extends React.Component {
  render() {
    return <MeditationsIndex />
  }
}

class ChatScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat!</Text>
      </View>
    )
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  Meditations: { screen: MeditationsScreen },
  Chat: { screen: ChatScreen }
})
