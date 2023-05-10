import { Image, Center, Heading, Text, View } from 'native-base'
import React from 'react'
import Tabs from '../components/Profile/Tabs'
import Colors from '../styles/colors'

function ProfileScreen() {
  return (
    <View>
      <Center bg={Colors.main} pt={10} pb={6}      >
        <Image
          source={require("../assets/icons/avatar.png")}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Jik
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>Joined Dec 12 2022</Text>
      </Center>
      <Tabs />
    </View>
  )
}

export default ProfileScreen