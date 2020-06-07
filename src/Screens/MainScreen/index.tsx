// MainMenu (FollowList)
import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

import {createDrawerNavigator} from '@react-navigation/drawer'

//3rd screen (Drawer in main)
import SettingPage from '~/Screens/SettingPage'
import ProfileScreen from '~/Screens/SettingPage/ProfileScreen'

function MainScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>메인 기본 팔로우 리스트</Text>
      <TouchableOpacity
        style={styles.buttonjoin}
        activeOpacity={0.8}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.buttontextjoin}>Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonjoin: {
    alignItems: 'center',
    padding: 10,
    width: '90%',
    borderRadius: 20,
  },
  buttontextjoin: {
    color: 'black',
    fontSize: 13,
    marginTop: 50, //임시
  },
})

// Drawer navigation
const Drawer = createDrawerNavigator()

// 내보내기
export default () => {
  return (
    <Drawer.Navigator initialRouteName="MainScreen">
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="SettingPage" component={SettingPage} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}
