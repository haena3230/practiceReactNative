// MainMenu (FollowList)
// 데이터 연결 해야해
// 지금은 사용자 이름, 프로필 정보 가져오는거는 초석 다져뒀고
// 기록 데이터는 아직 안함 ㅜ
import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native'

// LogOutComponents
// import LogOut from '~/Components/LogOut'

export default function MainScreen({navigation}) {
  // for link data -->
  const [name, setName] = useState('')
  const [profile, setProfile] = useState({})
  // 계정정보
  const fetchAccount = (username: string) => {
    const data = {
      id: 3,
      jsonrpc: '2.0',
      method: 'call',
      params: ['database_api', 'get_accounts', [[username]]],
    }
    // 패치해오는건 데이터 준비 되면 연결할거야
    return fetch('https://api.steemit.com', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => res.result[0])
  }
  // 연결
  const componentWillMount = () => {
    const username = 'anpigon'

    fetchAccount(username).then(({name, json_metadata}) => {
      const {profile} = JSON.parse(json_metadata)
      useState({
        name,
        profile,
      })
    })
  }
  // <--
  return (
    <ScrollView>
      {/* 가져온 정보로 계정 주인에 대한 정보 표시 */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        {/* 사용자 사진 */}
        <Image
          source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
          style={{width: 75, height: 75, borderRadius: 37.5}}
        />
        <Text style={{fontWeight: 'bold'}}>계정이름</Text>
        {/* 정보가져오기 */}
        {/* <Text style={{fontWeight: 'bold'}}>{profile.name}</Text>
          <Text>{profile.about}</Text>
          <Text>{profile.website}</Text> */}
        <Text style={{fontWeight: 'bold'}}> 님</Text>
      </View>
      {/* 여기부터 좌우 스크롤 */}
      <ScrollView horizontal={true} style={styles.list}>
        <View>
          <View>
            <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
          </View>
          <View>
            <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
          </View>
        </View>
        <View>
          <View>
            <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
          </View>
          <View>
            <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
          </View>
        </View>
        <View>
          <View>
            <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
          </View>
          <View>
            <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
          </View>
        </View>
      </ScrollView>
      <View>
        <Text>고양이 활동 내역</Text>
      </View>
      {/* 데이터 가져오는거 안넣어서 일단 막 때려넣음 ㅎㅎ */}
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'powderblue'}}>
            <Text>고양이 닉넴</Text>
          </View>
          <View style={{width: '40%', height: 50, backgroundColor: 'skyblue'}}>
            <Text>식사</Text>
          </View>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'steelblue'}}>
            <Text>16:40</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'powderblue'}}>
            <Text>고양이 닉넴</Text>
          </View>
          <View style={{width: '40%', height: 50, backgroundColor: 'skyblue'}}>
            <Text>식사</Text>
          </View>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'steelblue'}}>
            <Text>16:40</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'powderblue'}}>
            <Text>고양이 닉넴</Text>
          </View>
          <View style={{width: '40%', height: 50, backgroundColor: 'skyblue'}}>
            <Text>식사</Text>
          </View>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'steelblue'}}>
            <Text>16:40</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'powderblue'}}>
            <Text>고양이 닉넴</Text>
          </View>
          <View style={{width: '40%', height: 50, backgroundColor: 'skyblue'}}>
            <Text>식사</Text>
          </View>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'steelblue'}}>
            <Text>16:40</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'powderblue'}}>
            <Text>고양이 닉넴</Text>
          </View>
          <View style={{width: '40%', height: 50, backgroundColor: 'skyblue'}}>
            <Text>식사</Text>
          </View>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'steelblue'}}>
            <Text>16:40</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'powderblue'}}>
            <Text>고양이 닉넴</Text>
          </View>
          <View style={{width: '40%', height: 50, backgroundColor: 'skyblue'}}>
            <Text>식사</Text>
          </View>
          <View
            style={{width: '30%', height: 50, backgroundColor: 'steelblue'}}>
            <Text>16:40</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
  list: {
    // 사진 리스트
    flex: 1,
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
})
