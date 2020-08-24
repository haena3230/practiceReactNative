// Login 화면
import React from 'react'
import Reinput from 'reinput'

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'

// Login 관련 모듈
import auth from '@react-native-firebase/auth'
import {useState} from 'react'
import {Alert} from 'react-native'

// 로그인 화면 작성
function LoginScreen({navigation}) {
  // 동적값
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isValid, setValid] = useState(true)

  const __Login = () => {
    if (!email) {
      setError('Email required *')
      setValid(false)
      return
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars')
      setValid(false)
      return
    }
    __doLogin(email, password)
  }
  const __doLogin = async (email: string, password: string) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password)
      if (response && response.user) {
        Alert.alert('Success ✅', '성공적으로 로그인')
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageview}>
          <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
        </View>
        <View style={styles.formcontainer}>
          <Reinput
            style={styles.inputemail}
            underlineColor="#b1b2b2"
            labelActiveColor="#999999"
            underlineActiveColor="#999999"
            label="Email"
            //FB
            onChangeText={(text: React.SetStateAction<string>) => {
              setError
              setEmail(text)
            }}
          />
          <Reinput
            style={styles.inputemail}
            secureTextEntry
            underlineColor="#b1b2b2"
            labelActiveColor="#999999"
            underlineActiveColor="#999999"
            label="Password"
            //FB
            onChangeText={(text: React.SetStateAction<string>) =>
              setPassword(text)
            }
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            // onPress={() => navigation.navigate('MainNavigator')}>
            //FB
            onPress={() => __Login()}>
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
  )
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
})

export default LoginScreen
