// 익명 로그인 (로그인 없이 기능 대충 사용)
// 시간이 남으면 하고 아님 말자
import auth from '@react-native-firebase/auth'
export default function AnonyLogin() {
  auth()
    .signInAnonymously()
    .then(() => {
      console.log('User signed in anonymously')
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.')
      }

      console.error(error)
    })
}
