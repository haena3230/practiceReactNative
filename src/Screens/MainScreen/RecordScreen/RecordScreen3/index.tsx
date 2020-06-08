// RecordScreen3
import React from 'react'
import {Text, View, Button} from 'react-native'

function RecordScreen3({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>test</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

export default RecordScreen3
