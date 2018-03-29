import React from 'react'
import { Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import HomeIndex from './src/components/Home/Index'
import MeditationsIndex from './src/components/Meditation/Index'
import ChatIndex from './src/components/Chat/Index'

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
    return <ChatIndex />
  }
}

export default TabNavigator({
  Home: { screen: HomeScreen },
  Meditations: { screen: MeditationsScreen },
  Chat: { screen: ChatScreen }
})
