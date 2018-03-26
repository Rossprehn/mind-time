import React from 'react'
import { Text, View, uri, WebView } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const MeditationsDetail = ({ Meditation }) => {
  const { length, type, uri } = Meditation
  const { headerContentStyle, headerTextStyle, uriStyle } = styles

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{length}</Text>
          <Text>{type}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View>
          <WebView style={uriStyle} source={{ uri: uri }} />
        </View>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  uriStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default MeditationsDetail
