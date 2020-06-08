// MainMenu (FollowList)
import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

import {createDrawerNavigator} from '@react-navigation/drawer'

// For Drawer in main
import SettingPage from '~/Screens/SettingPage'
import ProfileScreen from '~/Screens/SettingPage/ProfileScreen'

// LogOutComponents
// import LogOut from '~/Components/LogOut'

function MainScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* 메인에 나오는 상단바 로그인 기능 적용되면 안나타남 */}
      <Text>메인 기본 팔로우 리스트</Text>
      <TouchableOpacity
        style={styles.buttonjoin}
        activeOpacity={0.8}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.buttontextjoin}>Drawer(메뉴나옴)</Text>
      </TouchableOpacity>
      {/* 로그아웃버튼 */}
      <TouchableOpacity
        style={styles.buttonjoin}
        activeOpacity={0.8}
        onPress={() => navigation.native('LoginScreen')}>
        {/* // onPress={() => LogOut()}> */}
        <Text style={styles.buttontextjoin}>
          LogOut(로그인 안되어있는 상태에서 누르면 에러남)
        </Text>
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
