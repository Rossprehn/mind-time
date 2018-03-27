import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements' // 0.17.0

class CheckForm extends Component {
  state = {
    index: 1
  }

  updateIndex = index => {
    this.setState({ index })
  }

  render() {
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['Morning', 'Modivation', 'Sleep']}
          containerStyle={{ height: 30 }}
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['Short', 'Medium', 'Long']}
          containerStyle={{ height: 30 }}
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['Vocal', 'Music']}
          containerStyle={{ height: 30 }}
        />
        <Button title="Find Meditation" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  }
})

export default CheckForm
