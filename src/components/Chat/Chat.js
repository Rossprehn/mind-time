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

class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      message: '',
      messages: []
    }
  }
  render() {
    return (
      <View className="container">
        <View className="row">
          <View className="col-4">
            <View className="card">
              <View className="card-body">
                <View className="card-title">Global Chat</View>
                <View className="messages">
                  {this.state.messages.map(message => {
                    return (
                      <Text>
                        {message.author}: {message.message}
                      </Text>
                    )
                  })}
                </View>
                <View className="footer">
                  <TextInput
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChangeText={ev => this.setState({ username: ev.target.value })}
                    className="form-control"
                  />
                  <TextInput
                    type="text"
                    placeholder="Message"
                    className="form-control"
                    value={this.state.message}
                    onChangeText={ev => this.setState({ message: ev.target.value })}
                  />
                  <button className="btn btn-primary form-control">Send</button>
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
