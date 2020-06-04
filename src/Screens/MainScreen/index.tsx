// MainMenu (FollowList)
import React from 'react';
import {Text, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import EventScreen from '~/Screens/MainScreen/EventScreen';

function MainScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => navigation.navigate(DrawerMenuNavigator)}
        title="Info"
        color="#fff"
      />
      <Text>메인 기본 팔로우 리스트</Text>
    </View>
  );
}

// Drawer navigation
const Drawer = createDrawerNavigator();

// // 3rd screen Navigation(DrawerMenu)
const DrawerMenuNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainScreen">
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="EventScreen" component={EventScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
