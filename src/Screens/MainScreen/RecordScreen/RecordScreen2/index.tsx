import React from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
// import AddPhoto from '~/Components/AddPhoto'; //이거 ADDPHOTO 기능 복사해온거라 손봐야할듯
import SaveButton from '~/Components/SaveButton' //이건 저장기능 추가하는거 알아볼게...

export default function RecordScreen2({navigation}) {
  const [value, onChangeText] = React.useState('글을 입력하세요')
  return (
    <View style={styles.container}>
      <View style={styles.Title} />
      <Text>기록하기</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <View style={styles.CatButton} />

      <TextInput
        style={{flex: 1, borderColor: 'gray', borderWidth: 1}} //이거 flex1로 해놔서 아래 스타일에서 크기 조절하면 되는건가?
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <View style={styles.AddPhoto} />
      {/* <AddPhoto/> */}
      <View style={styles.SaveButton} />
      <SaveButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Title: {
    flex: 1,
    backgroundColor: 'white',
  },
  CatButton: {
    flex: 1,
    backgroundColor: 'white',
  },
  TextRecord: {
    flex: 4,
    backgroundColor: 'white',
  },
  AddPhoto: {
    flex: 1,
    backgroundColor: 'white',
  },
  SaveButton: {
    flex: 1,
    backgroundColor: 'white',
  },
})
