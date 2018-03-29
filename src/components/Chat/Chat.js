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
import { Button } from 'react-native-elements' // 0.17.0

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      message: '',
      messages: []
    }

    this.socket = io('localhost:8080')

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
                    onChangeText={ev => this.setState({ username: ev.target.value })}
                  />
                  <TextInput
                    type="text"
                    placeholder="Message"
                    value={this.state.message}
                    onChangeText={ev => this.setState({ message: ev.target.value })}
                  />
                  <Button title="Find Meditation" />
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
