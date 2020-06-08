// MainMenu (FollowList)
// 데이터 가져와야함
import React, {useState} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native'
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
} from 'native-base'

import {createDrawerNavigator} from '@react-navigation/drawer'

// For Drawer in main
import SettingPage from '~/Screens/SettingPage'
import ProfileScreen from '~/Screens/SettingPage/ProfileScreen'
import LogOut from '~/Components/LogOut'

// LogOutComponents
// import LogOut from '~/Components/LogOut'

function MainScreen({navigation}) {
  const [name, setName] = useState('')
  const [reputation, setReputation] = useState(0)
  const [profile, setProfile] = useState({})
  const [postCount, setPostCount] = useState(0)
  const [followingCount, setFollowingCount] = useState(0)
  const [followerCount, setFollowerCount] = useState(0)

  const fetchAccount = (username: string) => {
    const data = {
      id: 3,
      jsonrpc: '2.0',
      method: 'call',
      params: ['database_api', 'get_accounts', [[username]]],
    }
    return fetch('https://api.steemit.com', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => res.result[0])
  }

  const fetchFollowCount = (username: string) => {
    const data = {
      id: 4,
      jsonrpc: '2.0',
      method: 'call',
      params: ['follow_api', 'get_follow_count', [username]],
    }
    return fetch('https://api.steemit.com', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => res.result)
  }

  const componentWillMount = () => {
    const username = 'anpigon'

    fetchAccount(username).then(
      ({name, post_count, reputation, json_metadata}) => {
        const {profile} = JSON.parse(json_metadata)
        const log =
          Math.log(parseInt(reputation.substring(0, 4))) / Math.log(10)
        useState({
          name,
          reputation:
            Math.max(reputation.length - 1 + (log - parseInt(log)) - 9, 0) * 9 +
            25,
          postCount: post_count,
          profile,
        })
      },
    )

    fetchFollowCount(username).then(({following_count, follower_count}) => {
      useState({
        followingCount: following_count,
        followerCount: follower_count,
      })
    })
  }
  return (
    <Container style={{flex: 1, backgroundColor: 'white'}}>
      <Header>
        <Left>
          <Icon name="md-person-add" style={{paddingLeft: 10}} />
        </Left>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
          <Icon name="ios-add" style={{paddingRight: 10, fontSize: 32}} />
        </Right>
      </Header>
      <Content>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={require('~/Assets/mdpi/login_nyang@mdpi.png')}
              style={{width: 75, height: 75, borderRadius: 37.5}}
            />
          </View>
          <View style={{flex: 3}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text>{postCount}</Text>
                <Text style={{fontSize: 10, color: 'gray'}}>posts</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text>{followingCount}</Text>
                <Text style={{fontSize: 10, color: 'gray'}}>follower</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text>{followerCount}</Text>
                <Text style={{fontSize: 10, color: 'gray'}}>following</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                bordered
                dark
                style={{
                  flex: 4,
                  marginLeft: 10,
                  justifyContent: 'center',
                  height: 30,
                  marginTop: 10,
                }}>
                <Text>ERLFLRLFLRLFLRLFLRFL</Text>
              </Button>
              <Button
                bordered
                dark
                small
                icon
                style={{
                  flex: 1,
                  marginRight: 10,
                  marginLeft: 5,
                  justifyContent: 'center',
                  height: 30,
                  marginTop: 10,
                }}>
                <Icon name="settings" />
              </Button>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={{fontWeight: 'bold'}}>
            {profile.name} ({reputation.toFixed(2)})
          </Text>
          <Text>{profile.about}</Text>
          <Text>{profile.website}</Text>
        </View>
        <ScrollView horizontal={true} style={styles.list}>
          <View style={styles.stylegridView}>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)">
              <View>
                <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)">
              <View>
                <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)">
              <View>
                <Image source={require('~/Assets/mdpi/login_nyang@mdpi.png')} />
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonjoin}
          activeOpacity={0.8}
          onPress={() => navigation.openDrawer()}>
          <Text style={styles.buttontextjoin}>
            Drawer(메뉴나옴)왼쪽에서 드래그해도 나옴
          </Text>
        </TouchableOpacity>
        {/* 로그아웃버튼 */}
        <TouchableOpacity
          style={styles.buttonjoin}
          activeOpacity={0.8}
          // 이거 있으면 에러 나려나?
          onPress={() => LogOut()}>
          <Text style={styles.buttontextjoin}>
            LogOut(로그인 안되어있는 상태에서 누르면 에러남)
          </Text>
        </TouchableOpacity>
      </Content>
    </Container>
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
    flex: 1,
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  stylegridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 10,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
})

// Drawer navigation
const Drawer = createDrawerNavigator()

// 내보내기
export default () => {
  return (
    <Drawer.Navigator initialRouteName="MainScreen">
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="SettingPage" component={SettingPage} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}
