// Login.tsx
import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

function Login({navigation}) {
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

  // state = {email: '', password: '', errorMessage: null};
  // handleLogin = () => {
  //   // TODO: Firebase stuff...
  //   console.log('handleLogin');
  // };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        // onChangeText={email => this.setState({email})}
        // value={this.state.email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        // onChangeText={password => this.setState({password})}
        // value={this.state.password}
      />
      <Button title="로그인" onPress={() => navigation.navigate('Main')} />
      <Button
        title="계정 없으면 가입하세요"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

export default Login;
