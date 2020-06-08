//저장 기록 넣으면 될듯헙니다!
import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native'

export default class SaveButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>기록하기</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 15,
  },
})
