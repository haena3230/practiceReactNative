// RecordScreen
import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

function RecordScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecordScreen2')}>
        <Image
          style={styles.menuimage}
          source={require('~/Assets/mdpi/feed_buttonmdpi.png')}
        />
        <Text style={styles.text}>밥 시간 기록하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecordScreen2')}>
        <Image
          style={styles.menuimage}
          source={require('~/Assets/mdpi/medical_buttonmdpi.png')}
        />
        <Text style={styles.text}>병원 기록하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecordScreen3')}>
        <Image
          style={styles.menuimage}
          source={require('~/Assets/mdpi/camera_buttonmdpi.png')}
        />
        <Text style={styles.text}>사진 올리기</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: '#b1b2b2',
  },
  menuimage: {
    resizeMode: 'contain',
  },
  text: {
    margin: 10,
    color: 'black',
  },
})

//Record Navigator
import RecordScreen2 from '~/Screens/MainScreen/RecordScreen/RecordScreen2'
import RecordScreen3 from '~/Screens/MainScreen/RecordScreen/RecordScreen3'

import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator()

function Record6Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecordScreen2" component={RecordScreen2} />
      <Stack.Screen name="RecordScreen3" component={RecordScreen3} />
    </Stack.Navigator>
  )
}
// 내보내기
export default () => {
  return (
    <Stack.Navigator initialRouteName="RecordScreen">
      <Stack.Screen name="RecordScreen" component={RecordScreen} />
      <Stack.Screen name="Record6Navigator" component={Record6Navigator} />
    </Stack.Navigator>
  )
}
