import React, { Component } from 'react'
import { ScrollView, View, Text, WebView, StyleSheet } from 'react-native'
import axios from 'axios'
// import MeditationsDetails from './MeditationsDetail'
import Card from './Card'
import CardSection from './CardSection'

var baseURL = 'https://meditations-db.herokuapp.com/meditations'

class Meditations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meditations: []
    }
  }

  componentWillMount() {
    this.loadData()
  }

  loadData = () => {
    axios.get(baseURL).then(response => this.setState({ meditations: response.data.meditations }))
  }
  rendermeditations = meditations => {
    return this.state.meditations.map(meditations => (
      <Card key={meditations.id}>
        <CardSection>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>Type:{meditations.type}</Text>
            <Text style={styles.headerTextStyle}>length: {meditations.length}</Text>
          </View>
        </CardSection>
        <View>
          <WebView style={styles.container} source={{ uri: meditations.uri }} />
        </View>
      </Card>
    ))
  }

  render() {
    console.log(this.state)
    return <ScrollView>{this.rendermeditations()}</ScrollView>
  }
}
const styles = StyleSheet.create({
  container: {
    height: 225,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
})

export default Meditations
