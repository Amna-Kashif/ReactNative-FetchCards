import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {


  const navigation = useNavigation()

  return (
    <View>
      <Text>Profile</Text>

{/* 
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>About</Text>
          </TouchableOpacity> */}

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})