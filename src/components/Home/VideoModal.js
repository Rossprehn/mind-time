import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, WebView } from 'react-native'
import Modal from 'react-native-modal'

class VideoModal extends Component {
  state = {
    isModalVisible: false
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
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
    height: 500
  }
})

export default VideoModal
