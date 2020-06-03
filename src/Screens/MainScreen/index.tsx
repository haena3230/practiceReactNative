// MainScreen
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>안녕 {/* {currentUser && currentUser.email} */}!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// function FollowListScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>기본 팔로우 리스트</Text>
//     </View>
//   );
// }

// function RecordScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>고양이 탐색</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
// {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="FollowListScreen" component={FollowListScreen} />
//       <Tab.Screen name="RecordScreen" component={RecordScreen} />
//     </Tab.Navigator>
//   );
// }
