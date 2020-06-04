// Login.tsx
import React from 'react';
import Reinput from 'reinput';
//reinput 모듈 다운
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

function LoginScreen({navigation}) {
  //state = {email: '', password: '', errorMessage: null};
  // handleLogin = () => {
  //   // TODO: Firebase stuff...
  //   console.log('handleLogin');
  // };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageview}>
          <Image source={require('~/Assets/login_nyang@mdpi.png')} />
        </View>
        <View style={styles.formcontainer}>
          <Reinput
            style={styles.inputemail}
            underlineColor="#b1b2b2"
            labelActiveColor="#999999"
            underlineActiveColor="#999999"
            label="Email"
            // onChangeText={email => this.setState({email})}
            // value={this.state.email}
          />
          <Reinput
            style={styles.inputemail}
            secureTextEntry
            underlineColor="#b1b2b2"
            labelActiveColor="#999999"
            underlineActiveColor="#999999"
            label="Password"
            //onChangeText={password => this.setState({password})}
            // value={this.state.password}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('MainNavigator')}>
            <Text style={styles.buttontext}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonjoin}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.buttontextjoin}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //전체 container
    flex: 1,
    backgroundColor: '#FCE0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageview: {
    //이미지
    alignItems: 'center',
    marginTop: 35,
    zIndex: 1,
    top: 23,
  },
  formcontainer: {
    //요소 있는 container
    flex: 1,
    backgroundColor: 'white',
    zIndex: 0,
    width: '90%',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputemail: {
    //이메일, 비밀번호 적는 칸
    width: '85%',
    height: 50,
    marginVertical: 5,
  },
  button: {
    //로그인 버튼
    alignItems: 'center',
    backgroundColor: '#b1b2b2',
    padding: 10,
    width: '90%',
    borderRadius: 20,
    margin: 24,
  },
  buttontext: {
    //로그인 버튼 text
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonjoin: {
    //회원가입 버튼
    alignItems: 'center',
    padding: 10,
    width: '90%',
    borderRadius: 20,
  },
  buttontextjoin: {
    //회원가입 버튼 text
    color: 'black',
    fontSize: 13,
    marginTop: 50, //임시
  },
});

export default LoginScreen;
