// 아직 연결 안되어 있으니 이페이지는 안봐도 됩니다.
import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import auth from '@react-native-firebase/auth'

function Loading() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // Handle user state changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [onAuthStateChanged])

  if (initializing) return null

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  )
}

export default Loading
