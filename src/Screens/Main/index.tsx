// Main.tsx
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function Main({navigation}) {
  // state = {currentUser: null};
  // render() {
  //   const {currentUser} = this.state;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>안녕 {/* {currentUser && currentUser.email} */}!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Main;
