//Navigator.tsx
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 1st screen (Login)
import MainScreen from '~/Screens/MainScreen';
// import Loading from '~/Screens/LoadingScreen';
import LoginScreen from '~/Screens/LoginScreen';
import SignUpScreen from '~/Screens/SignUpScreen';

// 2nd screen (Main)
import SearchScreen from '~/Screens/MainScreen/SearchScreen';
import RecordScreen from '~/Screens/MainScreen/RecordScreen';
import EventScreen from '~/Screens/MainScreen/EventScreen';
import PersonalScreen from '~/Screens/MainScreen/PersonalScreen';

// stack navigation
const Stack = createStackNavigator();

// BottomTab navigation
const BottomTab = createBottomTabNavigator();

import {Button} from 'react-native';

// 1st screen Navigation(Login)
function LoginNavigator() {
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
  );
};

// 2nd screen Navigation(Main)
const MainNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="MainScreen" component={MainScreen} />
      <BottomTab.Screen name="SearchScreen" component={SearchScreen} />
      <BottomTab.Screen name="RecordScreen" component={RecordScreen} />
      <BottomTab.Screen name="EventScreen" component={EventScreen} />
      <BottomTab.Screen name="PersonalScreen" component={PersonalScreen} />
    </BottomTab.Navigator>
  );
};

// 내보내기
export default () => {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};
