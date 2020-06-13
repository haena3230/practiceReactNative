// ProfileScreen
import React from 'react'
import {Text, View, Button} from 'react-native'

import LogOut from '~/Components/LogOut'

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>test2</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => LogOut()} title="로그아웃" />
    </View>
  )
}

export default ProfileScreen
