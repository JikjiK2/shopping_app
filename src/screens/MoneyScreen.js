import React, { useState, useEffect } from 'react'
import { Keyboard, TouchableWithoutFeedback, Dimensions, ImageBackground } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Modal, CheckIcon, Select, Radio, ScrollView, Box, Icon, NativeBaseProvider, Button, HStack, IconButton, Image, Input, Pressable, Text, View, VStack } from "native-base";
import { ToggleButton, } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { getAuth } from 'firebase/auth'
import { getFirestore, doc, setDoc, addDoc, serverTimestamp, getDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MoneyScreen({navigation}) {
   const [showModal, setShowModal] = useState(false);
   const [money, setMoney] = useState(null); // 글 제목
   const [fixvalue, setfixValue] = useState("");

   const handleFixValue = (value) => {
      const str = value.replace(/,/g, "");      
      const temp = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
      setfixValue(temp);
      // setStart_money((parseFloat(value) * 1000).toFixed(0));
   }

   const handleButton = (newButton) => {
      setClickId(newButton);
   };
   return (
      <SafeAreaProvider>
         <SafeAreaView backgroundColor="white" flex={1} alignItems="center">
            <HStack bg="gray.600" px="1" py="2" w="100%">
               <HStack alignItems="center">
                  <IconButton
                     _pressed={{bg:"gray.500"}}
                     icon={
                        <Icon as={Ionicons} name="chevron-back" size="7" color="white" />
                     }
                     onPress={() => navigation.pop()} />
                  <Text pl={3} color="white" fontSize="20" fontWeight="bold">
                     금액 충전
                  </Text>
               </HStack>
            </HStack>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
               <View 
                  minHeight={Math.round(windowHeight-100)}
                  w={windowWidth - 40}
                  
                  justifyContent="center"
                  // alignItems="center"
                  // bg="grey"
                  padding={3}
               >
                  <VStack h={windowHeight - 200}>
                     <View mt={4}>
                        <Text fontSize={20} bold>충전 금액을 입력해주세요.</Text>
                        <Text color="gray.700">보유중인 금액 0원</Text>
                     </View>
                     
                     <Input
                        mt={6}
                        mb={4}
                        w={windowWidth - 60}
                        fontSize={15}     
                        value={fixvalue}
                        onChangeText={(text) => { handleFixValue(text) }}
                        bg="white"
                        variant="outline"
                        placeholder="충전 금액"
                        keyboardType="numeric"
                        _focus={{
                           backgroundColor: "white",
                           borderColor: "black",
                           borderWidth: 2
                        }}                                              
                     />                     
                  </VStack>
                  <VStack>
                     <View>
                        <Button
                           bg="black"
                           _pressed={{bg:"gray.600"}}
                           onPress={() => {
                              setShowModal(true)
                           }}>
                           충전하기
                        </Button>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                           <Modal.Content maxWidth="400px">
                              <Modal.CloseButton />
                              <Modal.Header>충전</Modal.Header>                              
                              <Modal.Body padding={6} justifyContent="flex-start" >
                                 <Text fontSize={16}>충전 하시겠습니까?</Text>
                              </Modal.Body>
                              <Modal.Footer>
                                 <Button
                                    bg="white"
                                    _pressed={{bg:"gray.200"}}
                                    onPress={() => { setShowModal(false); }}>
                                    <Text color="black">
                                    취소
                                    </Text>
                                 </Button>
                                 <Button
                                  ml={5}  
                                  _pressed={{bg:"gray.600"}}
                                    bg="black"
                                    onPress={() => { setShowModal(false); }}>
                                    충전하기
                                 </Button>
                              </Modal.Footer>
                           </Modal.Content>
                        </Modal>
                     </View>
                  </VStack>
               </View>
            </TouchableWithoutFeedback>
         </SafeAreaView>
      </SafeAreaProvider>

   )
}

export default MoneyScreen