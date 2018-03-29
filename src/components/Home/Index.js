import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Header from '../Basic/Header'
import Button from '../Basic/Button'
import CheckForm from './CheckForm'

import { ButtonGroup } from 'react-native-elements'

export default class MeditationsIndex extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Welcome to Mind Time!'} />
        <Text style={styles.headerTextStyle}>
          Good afternoon! What kind of meditation do you need today?
        </Text>
        <View>
          <View>
            <Image style={styles.imageStyle} source={require('../../../assets/med.png')} />
          </View>
          <CheckForm />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    justifyContent: 'space-around'
  },
  imageStyle: {
    width: 375,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// <Button raised icon={{ name: 'cached' }} title="New User?" />
// <Button raised icon={{ name: 'cached' }} title="Short (under 10 minutes)" />
// <Button raised icon={{ name: 'cached' }} title="Medium (10 to 15 minutes)" />
// <Button raised icon={{ name: 'cached' }} title="Medium (15 ot 30 minutes)" />
