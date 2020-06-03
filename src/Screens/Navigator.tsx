//Navigator.tsx
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// screen 가져오기
import MainScreen from '~/Screens/MainScreen/Navigator';
// import Loading from '~/Screens/LoadingScreen';
import LoginScreen from '~/Screens/LoginScreen';
import SignUpScreen from '~/Screens/SignUpScreen';

// stack 내비게이션 생성
const Stack = createStackNavigator();

// 작성한 screen들로 구성 채우기
const StartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      {/* {isLoggedIn ? (
        <> */}
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{title: 'Main'}}
      />
      {/* <Stack.Screen
            name="LoadingScreen"
            component={Loading}
            options={{title: 'Loading'}}
          />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{title: 'Login'}}
      />
          </>
      ) : ( */}
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{title: 'SignUp'}}
      />
      {/* )} */}
    </Stack.Navigator>
  );
};
// 내보내기
export default () => {
  return (
    <NavigationContainer>
      <StartNavigator />
    </NavigationContainer>
  );
};
