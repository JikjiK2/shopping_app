import React from 'react'
import { Flex, Spacer, Icon, StatusBar, IconButton, Badge, Box, Center,
   HStack, NativeBaseProvider, Pressable, ScrollView, Text, View, VStack, Image } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const topTap = createMaterialTopTabNavigator();

function AppBar() {
  return <>
    <StatusBar bg="#5A5A5A" barStyle="light-content" />
    <Box safeAreaTop bg="#5A5A5A" />
    <HStack bg="#5A5A5A" px="1" py="1" justifyContent="space-between" alignItems="center" w="100%" >
      <HStack alignItems="center">
        <Text px="5" color="white" fontSize="20" fontWeight="bold">
          Title
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="7" color="white" />} />

      </HStack>
    </HStack>
  </>
}

function review() {
  return (
    <Center margin="4">
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space="2">

        <Pressable>
          {({ isHovered, isPressed }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }} p="4" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300" width="100%">
              <HStack alignItems="center" space="3">
              <Image  source={{uri:"https://source.unsplash.com/1024x768/?nature"}}  w="100" h="100"/>
              <VStack space="2">
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                2번 게시글
              </Text>
              <Text mt="2" ml="2" fontSize="sm" color="coolGray.700">
                Unlock powerful time-saving tools            
              </Text>
              <Text mt="1" fontSize={10} color="coolGray.500">
                  1 month ago
                </Text>  
              </VStack>
              
              </HStack>
              <Spacer />
                              
            </Box>;
            
          }}
        </Pressable>
      </VStack>
      </ScrollView>
    </Center>
  )
}

function twohand() {
  return (
    <View>
      <Text>중고거래게시판</Text>
    </View>
  )
}
function free() {
  return (
    <Center margin="5">
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space="2">

        <Pressable>
          {({ isHovered, isPressed }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300" width="100%">
              <HStack alignItems="center">
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                2번 게시글
              </Text>                           
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerful time-saving tools for creating email delivery and collecting marketing data
              </Text>
              <Spacer />
                <Text mt="1" fontSize={10} color="coolGray.500">
                  1 month ago
                </Text>
                <Image mt="3" source={{uri:"https://source.unsplash.com/1024x768/?nature"}}  w="100%" h="300" overflow="hidden"/>
            </Box>;
          }}
        </Pressable>
        <Pressable>
          {({ isHovered, isPressed }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
              transform: [{
                scale: isPressed ? 0.97 : 1
              }]
            }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300" width="100%">
              <HStack alignItems="center">
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                1번 게시글
              </Text>                           
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerful time-saving tools for creating email delivery and collecting marketing data
              </Text>
              <Spacer />
                <Text mt="1" fontSize={10} color="coolGray.500">
                  2 month ago
                </Text> 
            </Box>;
          }}
        </Pressable>
      </VStack>
      </ScrollView>
    </Center>
  )
}

function TopTap() { 
  return (
    <topTap.Navigator swipeEnabled={false}>
      <topTap.Screen name="자유게시판" component={free} />
      <topTap.Screen name="리뷰게시판" component={review} />
      <topTap.Screen name="중고거래" component={twohand} />
    </topTap.Navigator>
  );
}

function BoardScreen() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <TopTap />


    </NativeBaseProvider>
  )
}

export default BoardScreen