import { Box, Icon, NativeBaseProvider, Button, Heading, HStack, IconButton, Image, Input, Pressable, Text, View, VStack, Center, FormControl, useToast, toast } from "native-base";
import React, { useState, useEffect } from 'react'
import Colors from "../styles/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function ProductRegisterScreen({ navigation }) {
   return (
      <>
         <NativeBaseProvider>
            <HStack bg="lightgrey" px="1" py="4" w="100%">
               <HStack alignItems="center">
                  <IconButton
                     icon={
                        <Icon as={MaterialIcons} name="keyboard-backspace" size="7" color="black" />
                     }
                     onPress={() => navigation.pop()} />
                  <Text pl={3} color="black" fontSize="20" fontWeight="bold">
                     경매 물품 등록
                  </Text>
               </HStack>
            </HStack>
            <TouchableWithoutFeedback
               onPress={() => {
                  Keyboard.dismiss();
               }}
            >
               <View flex={1} bg="amber.100" padding={2} alignItems="center">
                  <View
                     padding={2}
                     bg="skyblue"
                     w="full"
                     h="full"
                     position="absolute"
                  //justifyContent="center"
                  //alignItems="center"
                  >
                     <VStack>
                        <HStack>
                           <View w="100" h="100" bg="red.100"
                              justifyContent="center"
                              alignItems="center"
                           >
                              <Text>이미지</Text>
                           </View>
                        </HStack>
                        <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                           <View style={{ flex: 1, height: 2, backgroundColor: 'black' }} />
                        </View>
                        <Input
                           bg="white"
                           variant="unstyled"
                           placeholder="글 제목"
                           _focus={{
                              backgroundColor: "white",
                              borderColor: "none",
                           }}
                        />
                        <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                           <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        </View>
                        <Input
                           bg="white"
                           variant="unstyled"
                           placeholder="글 제목"
                           _focus={{
                              backgroundColor: "white",
                              borderColor: "none",
                           }}
                        />
                        <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                           <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        </View>
                        <Input
                           bg="white"
                           variant="unstyled"
                           placeholder="글 제목"
                           _focus={{
                              backgroundColor: "white",
                              borderColor: "none",
                           }}
                        />
                     </VStack>
                  </View>
               </View>
            </TouchableWithoutFeedback>
         </NativeBaseProvider>
      </>
   );
}

export default ProductRegisterScreen;
