// MainScreen
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 화면 가져오기
import FollowListScreen from '~/Screens/MainScreen/FollowListScreen';
import SearchScreen from '~/Screens/MainScreen/SearchScreen';
import RecordScreen from '~/Screens/MainScreen/RecordScreen';
import EventScreen from '~/Screens/MainScreen/EventScreen';
import PersonalScreen from '~/Screens/MainScreen/PersonalScreen';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FollowListScreen" component={FollowListScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="RecordScreen" component={RecordScreen} />
      <Tab.Screen name="EventScreen" component={EventScreen} />
      <Tab.Screen name="PersonalScreen" component={PersonalScreen} />
    </Tab.Navigator>
  );
};
