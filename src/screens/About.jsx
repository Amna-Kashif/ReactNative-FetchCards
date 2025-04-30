import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { use } from 'react'
import { useNavigation } from '@react-navigation/native'

const About = () => {

  const navigation = useNavigation()

  return (
    <View>
      <Text>About</Text>

      {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text>Profile</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default About

const styles = StyleSheet.create({})