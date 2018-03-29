import React from 'react'
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
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
      console.log('reseving message on client')
      addMessage(data)
    })
  }
  addMessage = data => {
    console.log('addMessage', data)
    this.setState({ messages: [...this.state.messages, data] })
    console.log(this.state.messages)
  }
  sendMessage = ev => {
    console.log('message ', this.state)
    console.log('user', this.state.username)
    this.addMessage({
      author: this.state.username,
      message: this.state.message
    })
    // this.setState({ message: '' })
  }

  render() {
    return (
      <View>
        <View>
          <View>
            <View>
              <View>
                <Text>Global Chat</Text>
                <View>
                  {this.state.messages.map(message => {
                    return (
                      <Text>
                        {message.author}: {message.message}
                      </Text>
                    )
                  })}
                </View>
                <View>
                  <TextInput
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                  />
                  <TextInput
                    type="text"
                    placeholder="Message"
                    value={this.state.message}
                    onChangeText={message => this.setState({ message })}
                  />
                  <Button title="Send" color="blue" onPress={this.sendMessage.bind(this)} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Chat
