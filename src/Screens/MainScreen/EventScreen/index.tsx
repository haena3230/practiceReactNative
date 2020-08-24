// EventScreen
import React, {useState} from 'react'
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import * as Progress from 'react-native-progress'

function EventScreen() {
  // 첫번째 상태변수. 이미지소스 URL 저장
  const [image, setImage] = useState(null)
  // 두번째. 업로드여부 추적
  const [uploading, setUploading] = useState(false)
  // 세번째. 업로드중인 이미지 진행상황 추적
  const [transferred, setTransferred] = useState(0)

  // 이미지 선택기 메소드
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = {uri: response.uri}
        console.log(source)
        setImage(source)
      }
    })

    // 업로드 헬퍼 메소드
    const uploadImage = async () => {
      const {uri} = image
      const filename = uri.substring(uri.lastIndexOf('/') + 1)

      setUploading(true)
      setTransferred(0)

      const task = storage()
        .ref(filename)
        .putFile(uri)

      // set progress state
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        )
      })

      try {
        await task
      } catch (e) {
        console.error(e.message)
      }

      setUploading(false)

      Alert.alert(
        'Photo uploaded!',
        'Your photo has been uploaded to Firebase Cloud Storage!',
      )
      setImage(null)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => selectImage()}>
        <Text style={styles.buttonText}>이미지 선택 버튼</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{uri: image.uri}} style={styles.imageBox} />
        ) : null}
        {uploading ? (
          <View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred} width={300} />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => uploadImage()}>
            <Text style={styles.buttonText}>이미지 업로드</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6',
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 20,
  },
  imageBox: {
    width: 300,
    height: 300,
  },
})

export default EventScreen
