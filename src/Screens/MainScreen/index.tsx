// MainMenu (FollowList)
// 데이터 연결 해야해
// 지금은 사용자 이름, 프로필 정보 가져오는거는 초석 다져뒀고
// 기록 데이터는 아직 안함 ㅜ
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// LogOutComponents
// import LogOut from '~/Components/LogOut'

export default function MainScreen({navigation}) {
  // for link data -->
  const [name, setName] = useState('');
  const [profile, setProfile] = useState({});
  // 계정정보
  const fetchAccount = (username: string) => {
    const data = {
      id: 3,
      jsonrpc: '2.0',
      method: 'call',
      params: ['database_api', 'get_accounts', [[username]]],
    };
    // 패치해오는건 데이터 준비 되면 연결할거야
    return fetch('https://api.steemit.com', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => res.result[0]);
  };
  // 연결
  const componentWillMount = () => {
    const username = 'anpigon';

    fetchAccount(username).then(({name, json_metadata}) => {
      const {profile} = JSON.parse(json_metadata);
      useState({
        name,
        profile,
      });
    });
  };
  // <--
  return (
    <ScrollView style={styles.container}>
      {/* 가져온 정보로 계정 주인에 대한 정보 표시 */}
      <View style={styles.profilecontainer}>
        {/* 사용자 사진 */}
        <View style={styles.profilesubcon}>
          <Image
            source={require('~/Assets/profile_imagemdpi.png')}
            style={styles.profile}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.profiletext}>소웨냥이</Text>
            {/* 정보가져오기 */}
            {/* <Text style={{fontWeight: 'bold'}}>{profile.name}</Text>
          <Text>{profile.about}</Text>
          <Text>{profile.website}</Text> */}
            <Text style={styles.profiletext}> 님</Text>
          </View>
        </View>
      </View>
      {/* 여기부터 좌우 스크롤 */}
      <View style={styles.listcontainer}>
        <ScrollView horizontal={true}>
          <View>
            <View>
              <TouchableOpacity style={styles.imagebutton}>
                <Image
                  style={styles.scrollprofileimage}
                  source={require('~/Assets/profile_imagemdpi.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.imagebutton}>
                <Image
                  style={styles.scrollprofileimage}
                  source={require('~/Assets/profile_imagemdpi.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              <TouchableOpacity style={styles.imagebutton}>
                <Image
                  style={styles.scrollprofileimage}
                  source={require('~/Assets/profile_imagemdpi.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.imagebutton}>
                <Image
                  style={styles.scrollprofileimage}
                  source={require('~/Assets/profile_imagemdpi.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.imagebutton}>
              <Image
                style={styles.scrollprofileimage}
                source={require('~/Assets/profile_imagemdpi.png')}
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity style={styles.imagebutton}>
                <Image
                  style={styles.scrollprofileimage}
                  source={require('~/Assets/profile_imagemdpi.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.imagebutton}>
              <Image
                style={styles.scrollprofileimage}
                source={require('~/Assets/profile_imagemdpi.png')}
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity style={styles.imagebutton}>
                <Image
                  style={styles.scrollprofileimage}
                  source={require('~/Assets/profile_imagemdpi.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* 데이터 가져오는거 안넣어서 일단 막 때려넣음 ㅎㅎ */}
      <ScrollView style={styles.activitycontainer}>
        <View>
          <Text style={{fontSize: 15, paddingBottom: 5}}>고양이 활동 내역</Text>
        </View>
        <View style={styles.activitylist}>
          <View style={styles.nickname}>
            <Text numberOfLines={1}>Nyang1</Text>
          </View>
          <View style={styles.content}>
            <Text numberOfLines={1}>식사</Text>
          </View>
          <View style={styles.time}>
            <Text numberOfLines={1}>16:40</Text>
          </View>
        </View>
        <View style={styles.activitylist}>
          <View style={styles.nickname}>
            <Text numberOfLines={1}>Nyang2</Text>
          </View>
          <View style={styles.content}>
            <Text numberOfLines={1}>병원</Text>
          </View>
          <View style={styles.time}>
            <Text numberOfLines={1}>13:20</Text>
          </View>
        </View>
        <View style={styles.activitylist}>
          <View style={styles.nickname}>
            <Text numberOfLines={1}>Nyang3</Text>
          </View>
          <View style={styles.content}>
            <Text numberOfLines={1}>식사</Text>
          </View>
          <View style={styles.time}>
            <Text numberOfLines={1}>11:00</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', width: '100%'}} />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  profilecontainer: {
    //분홍색 container
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#F9D7D7',
  },
  profilesubcon: {
    //프로필사진+ 이름text
    marginTop: 20,
    alignItems: 'center',
  },
  profile: {
    //프로필 사진
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  profiletext: {
    //이름 text
    fontSize: 18,
    fontWeight: 'bold',
  },
  listcontainer: {
    // 사진 리스트 container
    flex: 1,
    width: '100%',
    backgroundColor: '#f2f2f2',
    paddingRight: 16,
    paddingVertical: 8,
  },
  imagebutton: {
    //리스트에 있는 사진 포함한 버튼
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginVertical: 8,
    marginLeft: 16,
  },
  scrollprofileimage: {
    //리스트 사진들
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  activitycontainer: {
    //활동내역 container
    paddingHorizontal: 16,
  },
  activitylist: {
    //활동내역 리스트 1줄씩
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  nickname: {
    //이름
    width: '30%',
    height: 40,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    padding: 5,
  },
  content: {
    //내용
    width: '50%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 5,
  },
  time: {
    //해당 시간
    width: '20%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 5,
  },
});
