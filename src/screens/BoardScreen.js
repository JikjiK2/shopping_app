import React from 'react'
import { Flex, Spacer, Icon, StatusBar, IconButton, Badge, Box, Center,
   HStack, NativeBaseProvider, Pressable, ScrollView, Text, View, VStack, Image } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../styles/colors"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, useWindowDimensions } from "react-native"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const width = useWindowDimensions.width;


const topTap = createMaterialTopTabNavigator();

function AppBar() {
  return <>
    <StatusBar bg="#5A5A5A" barStyle="light-content" />
    <Box safeAreaTop bg="#5A5A5A" />
    <HStack bg="#5A5A5A" px="1" py="1" justifyContent="space-between" alignItems="center" w="100%" >
      <HStack alignItems="center">
        {/* <Text px="5" color="white" fontSize="20" fontWeight="bold">
          Title
        </Text> */}
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="7" color="white" />} />

      </HStack>
    </HStack>
  </>
}

function review({navigation}) {
  return (
    <Center margin="4">
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space="2">        
        <Pressable width={windowWidth-40}
        onPress={()=>navigation.navigate("Single")}>
          {({ isHovered, isPressed }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }} p="4" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300" width="100%">
              <HStack alignItems="center" space="3">
              <Image  source={{uri:"https://source.unsplash.com/1024x768/?nature"}}  w="100" h="100"/>
              <VStack space="0">
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                4번 게시글
              </Text>
              <Text mt="2" ml="2" fontSize="sm" color="coolGray.700">
                경매 시작가: 1,000원 
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                현재 최고가: 3,000원    
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                남은 시간: 10시간 30분       
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                판매자: Jik       
              </Text>
              {/* <Text mt="1" fontSize={10} color="coolGray.500">
                  1 month ago
                </Text>   */}
              </VStack>
              
              </HStack>
              <Spacer />  
            </Box>;
          }}
        </Pressable>
        <Pressable width={windowWidth-40}>
          {({ isHovered, isPressed }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }} p="4" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300" width="100%">
              <HStack alignItems="center" space="3">
              <Image  source={{uri:"https://source.unsplash.com/1024x768/?nature"}}  w="100" h="100"/>
              <VStack space="0">
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                3번 게시글
              </Text>
              <Text mt="2" ml="2" fontSize="sm" color="coolGray.700">
                경매 시작가: 1,000원 
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                현재 최고가: 3,000원    
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                남은 시간: 10시간 30분       
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                판매자: Jik       
              </Text>
              {/* <Text mt="1" fontSize={10} color="coolGray.500">
                  1 month ago
                </Text>   */}
              </VStack>
              
              </HStack>
              <Spacer />  
            </Box>;
          }}
        </Pressable>
        <Pressable width={windowWidth-40}>
          {({ isHovered, isPressed }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }} p="4" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300" width="100%">
              <HStack alignItems="center" space="3">
              <Image  source={{uri:"https://source.unsplash.com/1024x768/?nature"}}  w="100" h="100"/>
              <VStack space="0">
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                2번 게시글
              </Text>
              <Text mt="2" ml="2" fontSize="sm" color="coolGray.700">
                경매 시작가: 1,000원 
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                현재 최고가: 3,000원    
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                남은 시간: 10시간 30분       
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                판매자: Jik       
              </Text>
              {/* <Text mt="1" fontSize={10} color="coolGray.500">
                  1 month ago
                </Text>   */}
              </VStack>
              
              </HStack>
              <Spacer />  
            </Box>;
          }}
        </Pressable>
        <Pressable width={windowWidth-40}>
          {({ isHovered, isPressed }) => {
            return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }} p="4" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300" width="100%">
              <HStack alignItems="center" space="3">
              <Image  source={{uri:"https://source.unsplash.com/1024x768/?nature"}}  w="100" h="100"/>
              <VStack space="0">
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                1번 게시글
              </Text>
              <Text mt="2" ml="2" fontSize="sm" color="coolGray.700">
                경매 시작가: 1,000원 
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                현재 최고가: 3,000원    
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                남은 시간: 10시간 30분       
              </Text>
              <Text ml="2" fontSize="sm" color="coolGray.700">
                판매자: Jik       
              </Text>
              {/* <Text mt="1" fontSize={10} color="coolGray.500">
                  1 month ago
                </Text>   */}
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
      <Text>판매 중인 경매 목록</Text>
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
      <topTap.Screen name="진행 중인 경매" component={review} />
      <topTap.Screen name="참여 중인 경매" component={free} />
      <topTap.Screen name="판매 중인 경매" component={twohand} />
    </topTap.Navigator>
  );
}
var abc = "상의";
function BoardScreen({navigation}) {
  return (
    <NativeBaseProvider>
      <View bg={Colors.main} flexDirection="row" justifyContent="space-between">        
          <IconButton icon={<Icon as={MaterialIcons} name="keyboard-backspace" size="7" color="white" />}
            onPress={() => navigation.pop()} />           
          {/* <IconButton icon={<Icon as={MaterialIcons} name="logout" size="7" color="white" alignSelf="flex-end" />}
            onPress={() => navigation.navigate("Login")} />          */}
      </View>
      <Text textAlign="center" fontSize={20}>{abc} 경매 게시판</Text>
      <TopTap />


    </NativeBaseProvider>
  )
}

export default BoardScreen