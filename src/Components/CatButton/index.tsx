//RecordScreen2 picker 사용한건데 데이터 불러와서 내용 보여주는건 알아보도록할게욤
import React, {useState} from 'react'
import {View, Picker, StyleSheet} from 'react-native'

export default function App() {
  const [selectedValue, setSelectedValue] = useState('고양이선택')
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="고양이선택" value="고양이선택" />
        <Picker.Item label="고양이선택2" value="고양이선택2" />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
})
