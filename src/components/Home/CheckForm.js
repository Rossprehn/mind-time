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
    // Promise.resolve(this.state)
    // .then(state => //call get uri function, making sure it returns object with uri)
    // .then(object => //set state of modal to visible)
    var current = this.state.chosenMeditations
    //find meditation uri as function returns uri
    this.state.meditations.forEach(meditation => {
      if (meditation.type === this.state.type) {
        if (meditation.length === this.state.length) {
          if (meditation.voice === this.state.voice) {
            current.push(meditation)
          }
        }
      }
    })
    this.setState({ chosenMeditations: current })
    console.log('Object updated to: ', this.state.chosenMeditations)
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  render() {
    console.log(this.state)
    const typeButtons = ['Morning', 'Motivation', 'Sleep']
    const lengthButtons = ['Short', 'Medium', 'Long']
    const voiceButtons = ['Spoken', 'Music']
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={itemIndex =>
            this.setState({ type: typeButtons[itemIndex], typeIndex: itemIndex })
          }
          selectedButtonStyle={styles.selectedButtonStyle}
          selectedIndex={this.state.typeIndex}
          selectedTextStyle={{ color: 'white' }}
          buttons={typeButtons}
          textStyle={{ fontWeight: 'bold' }}
          containerStyle={{ height: 30 }}
        />
        <ButtonGroup
          onPress={itemIndex =>
            this.setState({ length: lengthButtons[itemIndex], lengthIndex: itemIndex })
          }
          selectedButtonStyle={styles.selectedButtonStyle}
          selectedIndex={this.state.lengthIndex}
          selectedTextStyle={{ color: 'white' }}
          buttons={lengthButtons}
          textStyle={{ fontWeight: 'bold' }}
          containerStyle={{ height: 30 }}
        />
        <ButtonGroup
          onPress={itemIndex =>
            this.setState({ voice: voiceButtons[itemIndex], voiceIndex: itemIndex })
          }
          selectedButtonStyle={styles.selectedButtonStyle}
          selectedIndex={this.state.voiceIndex}
          selectedTextStyle={{ color: 'white' }}
          buttons={voiceButtons}
          containerStyle={{ height: 30 }}
        />
        <Button
          title="Find Meditation"
          onPress={this.chooseMeditations.bind(this)}
          textStyle={{ fontWeight: 'bold' }}
          backgroundColor={'#DB97C2'}
        />
        {this.state.chosenMeditations.length > 0 && (
          <Modal isVisible={this.state.isModalVisible}>
            <View>
              <TouchableOpacity onPress={this._toggleModal} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Hide me!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <WebView source={{ uri: this.state.chosenMeditations[0].uri }} />
            </View>
          </Modal>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    height: 300
  },
  selectedButtonStyle: {
    backgroundColor: '#5DC5AD'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
})

export default CheckForm
