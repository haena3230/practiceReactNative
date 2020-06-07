// 로그아웃
import auth from '@react-native-firebase/auth'

export default function LogOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'))
}
