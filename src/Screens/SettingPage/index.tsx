// SettingPage
import React from 'react';
import {Text, View, Button} from 'react-native';

function SettingPage({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>test1</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default SettingPage;
