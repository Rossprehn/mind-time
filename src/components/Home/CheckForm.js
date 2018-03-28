import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, WebView } from 'react-native'
import { ButtonGroup, Button } from 'react-native-elements' // 0.17.0
import axios from 'axios'
import Modal from 'react-native-modal'

import VideoModal from './VideoModal'

var baseURL = 'https://meditations-db.herokuapp.com/meditations'

class CheckForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      length: '',
      voice: '',
      typeIndex: -1,
      lengthIndex: -1,
      voiceIndex: -1,
      isModalVisible: false,
      meditations: [],
      chosenMeditations: []
    }
  }

  componentWillMount() {
    this.loadData()
  }
  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  loadData = () => {
    axios.get(baseURL).then(response => this.setState({ meditations: response.data.meditations }))
  }
  chooseMeditations = e => {
    var current = this.state.chosenMeditations
    this.state.meditations.forEach(meditation => {
      if (meditation.type === this.state.type.toLowerCase()) {
        if (meditation.length === this.state.length.toLowerCase()) {
          current.push(meditation)
        }
      }
    })
    this.setState({ chosenMeditations: current })
    console.log(this.state.chosenMeditations)
    this._toggleModal
  }

  render() {
    console.log(this.state)
    const typeButtons = ['Morning', 'Modivation', 'Sleep']
    const lengthButtons = ['Short', 'Medium', 'Long']
    const voiceButtons = ['Vocal', 'Music']
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={itemIndex =>
            this.setState({ type: typeButtons[itemIndex], typeIndex: itemIndex })
          }
          selectedIndex={this.state.typeIndex}
          buttons={typeButtons}
          containerStyle={{ height: 30 }}
        />
        <ButtonGroup
          onPress={itemIndex =>
            this.setState({ length: lengthButtons[itemIndex], lengthIndex: itemIndex })
          }
          selectedIndex={this.state.lengthIndex}
          buttons={lengthButtons}
          containerStyle={{ height: 30 }}
        />
        <ButtonGroup
          onPress={itemIndex =>
            this.setState({ voice: voiceButtons[itemIndex], voiceIndex: itemIndex })
          }
          selectedIndex={this.state.voiceIndex}
          buttons={voiceButtons}
          containerStyle={{ height: 30 }}
        />
        <Button title="Find Meditation" onPress={this.chooseMeditations.bind(this)} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <WebView source={{ uri: 'https://www.youtube.com/watch?v=LrpZjbe42mQ' }} />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    height: 500
  }
})

export default CheckForm
