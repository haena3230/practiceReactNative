// Login
import auth from '@react-native-firebase/auth'
import {useState} from 'react'
import {Alert} from 'react-native'

// import

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState('')
  const [isValid, setValid] = useState(true)

  if (!email) {
    setError('Email required *')
    setValid(false)
    return
  } else if (!password && password.trim() && password.length > 6) {
    setError('Weak password, minimum 5 chars')
    setValid(false)
    return
  }
  __Login(email, password)
}
const __Login = async (email: string, password: string) => {
  try {
    let response = await auth().signInWithEmailAndPassword(email, password)
    if (response && response.user) {
      Alert.alert('Success ✅', '성공적으로 로그인')
    }
  } catch (e) {
    console.error(e.message)
  }
}
