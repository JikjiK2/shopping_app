import { Input, ScrollView, Image, Center, Heading, Text, View, VStack, Pressable, Box, IconButton, Icon, HStack, Button } from 'native-base'
import React, { useState } from 'react'
import Tabs from '../components/Profile/Tabs'
import Colors from '../styles/colors'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, TouchableWithoutFeedback, Dimensions } from "react-native";

function QAScreen({ navigation }) {
   const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;
   const [title, setTitle] = useState(""); // 글 제목
   const [description, setDescription] = useState(""); // 설명
   return (

      <SafeAreaProvider>
         <SafeAreaView backgroundColor="white" flex={1}>
            <View flex={1}>
               <View py={1} bg="gray.600" flexDirection="row" alignItems="center">
                  <IconButton  _pressed={{bg:"gray.500"}} icon={<Icon as={Ionicons} name="chevron-back" size="7" color="white" />}
                     onPress={() => navigation.pop()} />
                  <Text fontSize={20} color="white" bold>설정</Text>
               </View>               
               <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                     <View
                        bg="white"
                        padding={3}
                        w={windowWidth - 20}>
                        <VStack>
                           <Input
                              value={title}
                              onChangeText={setTitle}
                              bg="white"
                              variant="unstyled"
                              placeholder="제목"
                              fontSize={16}
                              _focus={{
                                 backgroundColor: "gray.100",
                                 borderColor: "none",
                              }}
                           />
                           <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                           </View>
                           <Input
                              value={description}
                              onChange={(e) => {
                                 setDescription(e.nativeEvent.text);
                              }}
                              multiline={true}
                              onChangeText={setDescription}
                              placeholderTextColor="grey"
                              numberOfLines={10}
                              scrollEnabled
                              bg="white"
                              variant="unstyled"
                              placeholder="문의할 내용을 작성해 주세요."
                              _focus={{
                                 backgroundColor: "gray.100",
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
                           <Button
                              bg="black"
                              backgroundColor={ (title.length > 0 && description.length > 0) ? "black" : "gray.400"}
                              disabled={!(title.length > 0 && description.length > 0)}
                              onPress={() => {
                                 // handleRegister;
                              }}>
                              문의하기
                           </Button>
                        </VStack>
                     </View>
                  </ScrollView>
               </TouchableWithoutFeedback>
            </View>
         </SafeAreaView>
      </SafeAreaProvider>
   )
}

export default QAScreen