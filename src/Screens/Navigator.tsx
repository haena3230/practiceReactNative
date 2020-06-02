//Navigator.tsx
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// screen 가져오기
import Main from '~/Screens/Main';
// import Loading from '~/Screens/Loading';
import Login from '~/Screens/Login';
import SignUp from '~/Screens/SignUp';

// stack 내비게이션 생성
const Stack = createStackNavigator();

// 작성한 screen들로 구성 채우기
const StartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      {/* {isLoggedIn ? (
        <> */}
      <Stack.Screen name="Main" component={Main} options={{title: 'Main'}} />
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
        name="SignUp"
        component={SignUp}
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
