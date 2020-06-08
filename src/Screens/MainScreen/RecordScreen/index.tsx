// RecordScreen
import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'

function RecordScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Button1}
          onPress={() => navigation.navigate('RecordScreen2')}>
          <Image
            style={{height: '60%', width: '60%', resizeMode: 'contain'}}
            source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button2}
          onPress={() => navigation.navigate('RecordScreen2')}>
          <Image
            style={{height: '60%', width: '60%', resizeMode: 'contain'}}
            source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Button3}
          onPress={() => navigation.navigate('RecordScreen3')}>
          <Image
            style={{height: '60%', width: '60%', resizeMode: 'contain'}}
            source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button4}
          onPress={() => navigation.navigate('RecordScreen2')}>
          <Image
            style={{height: '60%', width: '60%', resizeMode: 'contain'}}
            source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Button5}
          onPress={() => navigation.navigate('RecordScreen2')}>
          <Image
            style={{height: '60%', width: '60%', resizeMode: 'contain'}}
            source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button6}
          onPress={() => navigation.navigate('RecordScreen2')}>
          <Image
            style={{height: '60%', width: '60%', resizeMode: 'contain'}}
            source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  Button1: {
    width: '50%',
    flex: 1,
    backgroundColor: 'gray',
  },
  Button2: {
    width: '50%',
    flex: 1,
    backgroundColor: 'gray',
  },
  Button3: {
    width: '50%',
    flex: 1,
    backgroundColor: 'gray',
  },
  Button4: {
    width: '50%',
    flex: 1,
    backgroundColor: 'gray',
  },
  Button5: {
    width: '50%',
    flex: 1,
    backgroundColor: 'gray',
  },
  Button6: {
    width: '50%',
    flex: 1,
    backgroundColor: 'gray',
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
