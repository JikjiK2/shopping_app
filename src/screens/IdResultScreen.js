import React from 'react'
import { Text, View, Icon, IconButton, Box, Heading, VStack, Button } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";

function IdResultScreen({route, navigation}) {
   const { foundID } = route.params;
   return (
      <>
         
         <Box flex={1} bg={color = "white"}>
            <Box
               w="full"
               h="full"
               position="absolute"
               top="0"
               px="6"
               justifyContent="center"
               alignItems="center"
            >
               <Heading>아이디 {foundID[0]} 입니다</Heading>
               <Box h={5}/>
               <Button
                     w="40%"
                     rounded={5}
                     onPress={() => navigation.navigate("Login")}
                  >
                     로그인
                  </Button>
                  <Box h={5}/>
                  <Button
                     w="40%"
                     rounded={5}
                     onPress={() => navigation.navigate("PW_Search")}
                  >비밀번호 찾기</Button>

            </Box>
         </Box>
      </>
   )
}

export default IdResultScreen