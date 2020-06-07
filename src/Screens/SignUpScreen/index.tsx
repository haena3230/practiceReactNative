// // SignUp Screen
import React, {useState} from 'react'
import Reinput from 'reinput'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native'
// FB
import auth from '@react-native-firebase/auth'

function SignUpScreen({navigation}) {
  //FB
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState('')
  const [isValid, setValid] = useState(true)
  //FB
  const __doSignUp = () => {
    if (!email) {
      setError('Email required *')
      setValid(false)
      return
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars')
      setValid(false)
      return
    }
    __doCreateUser(email, password)
  }
  //FB
  const __doCreateUser = async (email: string, password: string) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      )
      if (response && response.user) {
        Alert.alert('Success ✅', '성공적으로 회원가입')
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{flex: 0.2}}>{!!fetching && <ActivityIndicator />}</View>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('~/Assets/mdpi/email_textmdpi.png')}
        />
        <Reinput
          style={styles.textInput}
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
      </View>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('~/Assets/mdpi/pw_textmdpi.png')}
        />
        <Reinput
          style={styles.textInput}
          secureTextEntry
          label="Password"
          underlineColor="#b1b2b2"
          labelActiveColor="#999999"
          underlineActiveColor="#999999"
          //FB
          onChangeText={(text: React.SetStateAction<string>) =>
            setPassword(text)
          }
        />
      </View>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('~/Assets/mdpi/pwcheck_textmdpi.png')}
        />
        <Reinput
          style={styles.textInput}
          secureTextEntry
          label="Password Check"
          underlineColor="#b1b2b2"
          labelActiveColor="#999999"
          underlineActiveColor="#999999"
        />
      </View>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('~/Assets/mdpi/username_textmdpi.png')}
        />
        <Reinput
          style={styles.textInput}
          label="Username"
          underlineColor="#b1b2b2"
          labelActiveColor="#999999"
          underlineActiveColor="#999999"
        />
      </View>
      {error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : null}
      <View style={styles.buttonview}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          //FB
          // onPress={() => __doSignUp()}>
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.buttontext}>가입하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonalreadylog}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttontextalreadylog}>
            이미 계정이 있으시나요? 로그인해주세요
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginVertical: 6,
  },
  image: {
    justifyContent: 'flex-start',
    marginTop: 12,
  },
  textInput: {
    justifyContent: 'flex-end',
    height: 50,
    width: '85%',
    marginLeft: 8,
  },
  buttonview: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#b1b2b2',
    padding: 10,
    width: '90%',
    borderRadius: 20,
    marginTop: 20,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonalreadylog: {
    alignItems: 'center',
    padding: 10,
    width: '90%',
    marginTop: 22,
  },
  buttontextalreadylog: {
    color: 'black',
    fontSize: 13,
  },
})

export default SignUpScreen
