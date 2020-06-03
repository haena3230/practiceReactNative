// SignUp.tsx
import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        // onChangeText={email => this.setState({email})}
        // value={this.state.email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        // onChangeText={password => this.setState({password})}
        // value={this.state.password}
      />
      <Button title="가입하기" onPress={() => navigation.navigate('MainScreen')} />
      <Button
        title="계정이 있다면 로그인 ㄱ"
        onPress={() => navigation.navigate('LoginScreen')}
      />
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

export default SignUpScreen;
