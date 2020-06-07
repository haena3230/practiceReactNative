//Navigator.tsx
import React, {useState, useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

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

//style
import {Button, Image} from 'react-native'

// stack navigation
const Stack = createStackNavigator()

// BottomTab navigation
const BottomTab = createBottomTabNavigator()

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

// 로그인
import auth from '@react-native-firebase/auth'

function FirstNavigator() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) return null

  if (!user) {
    return (
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

// 내보내기
export default FirstNavigator
