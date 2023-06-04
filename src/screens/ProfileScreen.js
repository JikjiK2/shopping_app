import { Image, Center, Heading, Text, View, VStack, Pressable, Box, IconButton, Icon, HStack } from 'native-base'
import React from 'react'
import Tabs from '../components/Profile/Tabs'
import Colors from '../styles/colors'
import { MaterialIcons } from "@expo/vector-icons";

function ProfileScreen({ navigation }) {
  return (
    <View>
      <View bg={Colors.main} flexDirection="row" justifyContent="space-between">        
          <IconButton icon={<Icon as={MaterialIcons} name="keyboard-backspace" size="7" color="white" />}
            onPress={() => navigation.pop()} />           
          <IconButton icon={<Icon as={MaterialIcons} name="logout" size="7" color="white" alignSelf="flex-end" />}
            onPress={() => navigation.navigate("Login")} />         
      </View>

      <Center bg={Colors.main} pt={3} pb={6}>
        <Image
          source={require("../assets/icons/avatar.png")}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={20} isTruncated my={2} color={Colors.white}>
          Jik
        </Heading>
        <Text italic fontSize={15} color={Colors.white}>abc123@gmail.com</Text>
        <Text mt={2} fontSize={30} color={Colors.white}>현재 소지금 : 1,000,000원</Text>   
      </Center>
      <VStack mt={10} ml={3} mr={3} space={5}>
         
        <Pressable
          onPress={() => navigation.navigate("Board")}>
          {({ isHovered, isPressed, }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}
              style={{
                transform: [{
                  scale: isPressed ? 0.96 : 1
                }]
              }}
              p="5"
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
              alignItems='center'
            >
              <Text color="coolGray.800" fontWeight="bold" fontSize="20">
                현재 참여 중인 경매
              </Text>
            </Box>
          }}
        </Pressable>        
        <Pressable
          onPress={() => navigation.navigate("Board")}>
          {({ isHovered, isPressed, }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}
              style={{
                transform: [{
                  scale: isPressed ? 0.96 : 1
                }]
              }}
              p="5"
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
              alignItems='center'
            >
              <Text color="coolGray.800" fontWeight="bold" fontSize="20">
                현재 판매 중인 경매
              </Text>
            </Box>
          }}
        </Pressable>

        <Pressable>
          {({ isHovered, isPressed, }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}
              style={{
                transform: [{
                  scale: isPressed ? 0.96 : 1
                }]
              }}
              p="5"
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
              alignItems='center'
            >

              <Text color="coolGray.800" fontWeight="bold" fontSize="20">
                금액 충전
              </Text>
            </Box>
          }}
        </Pressable>
      </VStack>

    </View>
  )
}

export default ProfileScreen