// SignUp Screen
import React from 'react';
import Reinput from 'reinput';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Reinput
        style={styles.textInput}
        secureTextEntry
        underlineColor="#b1b2b2"
        labelActiveColor="#999999"
        underlineActiveColor="#999999"
        label="Email"
      />
      <Reinput
        style={styles.textInput}
        secureTextEntry
        label="Password"
        underlineColor="#b1b2b2"
        labelActiveColor="#999999"
        underlineActiveColor="#999999"
      />
      <Reinput
        style={styles.textInput}
        secureTextEntry
        label="Password Check"
        underlineColor="#b1b2b2"
        labelActiveColor="#999999"
        underlineActiveColor="#999999"
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MainScreen')}>
        <Text style={styles.buttontext}>가입하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttontext}>
          이미 계정을 가지셨나요? 로그인해주세요
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: '90%',
    marginTop: 8,
  },
  button: {
    //버튼
    alignItems: 'center',
    backgroundColor: '#b1b2b2',
    padding: 10,
    width: '90%',
    borderRadius: 20,
    margin: 24,
  },
  buttontext: {
    //버튼 text
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default SignUpScreen;
