// SearchScreen
import React from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native'

function SearchScreen() {
  return (
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
  )
}
const styles = StyleSheet.create({
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

export default SearchScreen
