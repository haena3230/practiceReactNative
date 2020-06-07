//Navigator.tsx
import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'

// 1st screen (Login)
import MainScreen from '~/Screens/MainScreen'
// import Loading from '~/Screens/LoadingScreen';
import LoginScreen from '~/Screens/LoginScreen'
import SignUpScreen from '~/Screens/SignUpScreen'

// 2nd screen (Main)
import SearchScreen from '~/Screens/MainScreen/SearchScreen'
import RecordScreen from '~/Screens/MainScreen/RecordScreen'
import EventScreen from '~/Screens/MainScreen/EventScreen'
import PersonalScreen from '~/Screens/MainScreen/PersonalScreen'

//3rd screen (Drawer in main)
import SettingPage from '~/Screens/SettingPage'
import ProfileScreen from '~/Screens/SettingPage/ProfileScreen'

//style
import {Button, Image} from 'react-native'

// stack navigation
const Stack = createStackNavigator()

// BottomTab navigation
const BottomTab = createBottomTabNavigator()

// Drawer navigation
const Drawer = createDrawerNavigator()

// 1st screen Navigation(Login)
const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{
          headerTitle: 'test',
          headerRight: () => (
            <Button
              // eslint-disable-next-line no-alert
              onPress={() => alert('This is a button!')}
              title="fdfsdffg"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{title: 'SignUp'}}
      />
    </Stack.Navigator>
  )
}

// 2nd screen Navigation(Main)
function MainNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require('~/Assets/mdpi/main_buttonmdpi.png')} />
          ),
        }}
        name="MainScreen"
        component={MainScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require('~/Assets/mdpi/search_buttonmdpi.png')} />
          ),
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require('~/Assets/mdpi/dairy_buttonmdpi.png')} />
          ),
        }}
        name="RecordScreen"
        component={RecordScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require('~/Assets/mdpi/event_buttonmdpi.png')} />
          ),
        }}
        name="EventScreen"
        component={EventScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require('~/Assets/mdpi/personal_buttonmdpi.png')} />
          ),
        }}
        name="PersonalScreen"
        component={PersonalScreen}
      />
    </BottomTab.Navigator>
  )
}

function SettingNavigator() {
  ;<Drawer.Navigator initialRouteName="MainNavigator">
    <Drawer.Screen name="MainNavigator" component={MainNavigator} />
    <Drawer.Screen name="Setting" component={SettingPage} />
    // <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
}

// 내보내기
export default () => {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  )
}
