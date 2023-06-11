import { Radio, ScrollView, Box, Icon, NativeBaseProvider, Button, Heading, HStack, IconButton, Image, Input, Pressable, Text, View, VStack, Center, FormControl, useToast, toast } from "native-base";
import React, { useState, useEffect } from 'react'
import Colors from "../styles/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback, Dimensions } from "react-native";
import { getFirestore, doc, setDoc, addDoc, serverTimestamp, getDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ToggleButton, } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const windowWidth = Dimensions.get('window').width;


function ProductRegisterScreen({ navigation }) {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [open, setOpen] = useState(false);
   const [category, setCategory] = useState("");
   const [time, setTime] = useState("");
   const [method, setMethod] = useState("");
   const [items, setItems] = useState([
      { label: "기타", value: "기타" },
      { label: "전자기기", value: "전자기기" },
      { label: "도서", value: "도서" },
      { label: "의류", value: "의류" },
      { label: "미술품", value: "미술품" },
      { label: "부동산", value: "부동산" },
      { label: "뷰티", value: "뷰티" },
      { label: "차량", value: "차량" },
      { label: "악기", value: "악기" },
      { label: "기프티콘", value: "기프티콘" },
      { label: "악세서리", value: "악세서리" },
   ]);
   const [userInfo, setUserInfo] = useState(null);
   const auth = getAuth();
   const user = auth.currentUser;

   useEffect(() => {
      const fetchUserInfo = async () => {
         const firestore = getFirestore();
         const userDocRef = doc(firestore, 'users', user.uid); // 사용자ID에는 실제 사용자의 ID를 넣어야 합니다.
         const userDocSnapshot = await getDoc(userDocRef);
         if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUserInfo(userData);
         }
      };

      fetchUserInfo();
   }, []);

   const handleRegister = async () => {
      const firestore = getFirestore();

      if (!userInfo) {
         // User is not logged in, handle accordingly
         return;
      }

      try {
         const collectionRef = collection(firestore, "items", "user",user.uid);

         const docData = {
            title: title,
            description: description,
            category: category,
            time: time,
            method: method,
            order: serverTimestamp()
         };

         await addDoc(collectionRef, docData);

         console.log("저장 성공");
      } catch (err) {
         console.log("저장 실패", err);
      }
   }

   
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
                  <ScrollView
                     showsVerticalScrollIndicator={false}
                  >
                     <View
                        padding={5}
                        bg="skyblue"
                        w={windowWidth - 20}
                     >
                        <VStack>
                           <HStack>
                              <View>
                                 <Pressable>
                                    <View

                                       style={{
                                          width: 100,
                                          height: 100,
                                          backgroundColor: "red",
                                          justifyContent: "center",
                                          alignItems: "center",
                                       }}
                                    >
                                       
                                          <Text>이미지</Text>
                                       
                                    </View>
                                 </Pressable>
                              </View>
                           </HStack>
                           <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ flex: 1, height: 2, backgroundColor: 'black' }} />
                           </View>
                           <Input
                              value={title}
                              onChangeText={setTitle}
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
                           <View zIndex={1}>
                              <DropDownPicker
                                 placeholderStyle={{ color: "grey" }}
                                 placeholder="카테고리"
                                 open={open}
                                 value={category}
                                 items={items}
                                 setOpen={setOpen}
                                 setValue={setCategory}
                                 setItems={setItems}
                              />
                           </View>
                           <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                           </View>
                           <View>
                              <Radio.Group
                                 name="methodRadio"
                                 value={method}
                                 onChange={(value) => {
                                    setMethod(value);
                                 }}
                              >
                                 <HStack space={2}>
                                    <Radio colorScheme="black" value="최저가">
                                       최저가
                                    </Radio>
                                    <Radio colorScheme="black" value="블라인드">
                                       블라인드
                                    </Radio>
                                 </HStack>
                              </Radio.Group>
                           </View>
                           <View
                              mt={4}
                              mb={4}
                              style={{ flexDirection: "row", alignItems: "center" }}
                           >
                              <View
                                 style={{ flex: 1, height: 1, backgroundColor: "black" }}
                              />
                           </View>
                           <View>
                              <Radio.Group
                                 name="timeRadio"
                                 value={time}
                                 onChange={(value) => {
                                    setTime(value);
                                 }}
                              >
                                 <HStack space={2}>
                                    <Radio colorScheme="black" value="24">
                                       24시간
                                    </Radio>
                                    <Radio colorScheme="black" value="48">
                                       48시간
                                    </Radio>
                                    <Radio colorScheme="black" value="72">
                                       72시간
                                    </Radio>
                                 </HStack>
                              </Radio.Group>
                           </View>
                           <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                           </View>
                           <Input
                              value={description}
                              onChange={(e) => {
                                 setDescription(e.nativeEvent.text);
                              }}
                              numberOfLines={10}
                              bg="white"
                              variant="unstyled"
                              placeholder="부가 설명"
                              _focus={{
                                 backgroundColor: "white",
                                 borderColor: "none",
                              }}
                           />
                           <View
                              mt={4}
                              mb={4}
                              style={{ flexDirection: "row", alignItems: "center" }}
                           >
                              <View
                                 style={{ flex: 1, height: 1, backgroundColor: "black" }}
                              />
                           </View>
                           <Button onPress={handleRegister}>완료</Button>
                        </VStack>
                     </View>
                  </ScrollView>
               </View>
            </TouchableWithoutFeedback>
         </NativeBaseProvider>
      </>
   );
}

export default ProductRegisterScreen;