// Login.tsx
import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import Reinput from 'reinput';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
      />
      <Button title="로그인" onPress={() => navigation.navigate('Main')} />
      <Button
        title="계정 없으면 가입하세요"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Reinput label="name" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

export default Login;
