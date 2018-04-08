import React from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Text,
  Image,
  onChangeText,
  StyleSheet
} from 'react-native'
import io from 'socket.io-client'
import { Button } from 'react-native-elements' // 0.17.0

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      message: '',
      messages: []
    }

    this.socket = io.connect('localhost:8080')

    this.socket.on('RECEIVE_MESSAGE', function(data) {
      addMessage(data)
    })

    const addMessage = data => {
      console.log(data)
      this.setState({ messages: [...this.state.messages, data] })
      console.log(this.state.messages)
    }

    this.sendMessage = ev => {
      ev.preventDefault()
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      })
      this.setState({ message: '' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <View>
              <View>
                <View style={styles.chatStyle}>
                  {this.state.messages.map(message => {
                    return (
                      <Text>
                        {message.author}: {message.message}
                      </Text>
                    )
                  })}
                </View>
                <View style={styles.containerStyle}>
                  <TextInput
                    style={styles.inputName}
                    type="text"
                    placeholder=" Username"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                  />
                  <TextInput
                    style={styles.inputMessage}
                    type="text"
                    placeholder=" Message"
                    value={this.state.message}
                    onChangeText={message => this.setState({ message })}
                  />
                </View>
                <TouchableOpacity onPress={this.sendMessage.bind(this)} style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd'
  },
  chatStyle: {
    height: 300
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 34,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#DB97C2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  inputName: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    marginTop: 5,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  inputMessage: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    height: 40,
    marginTop: 5,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
})
export default Chat
