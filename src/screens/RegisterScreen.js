import { Button, Box, Heading, Image, Input, Text, View, VStack } from 'native-base'
import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView } from 'react-native';
import Colors from '../styles/colors'
import { } from 'react-native-gesture-handler';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import * as firebase from "firebase/app";

import 'firebase/database'
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import firebase_db from '../../firebaseConfig'

const getImage = async () => {
  let url = '';
  try {
    const fileRef = firebase_db.ref().child('로그인.png');     
      photoURL = await fileRef.getDownloadURL();
    console.log(photoURL);
  } catch (e) {
    console.log(e);
  }
};
function selectDB() {
  // RealTime
  // firebase_db.ref('users/').on("value", snapshot => {
  //   console.log(snapshot)
  // })

  // FireStore
  const test = firebase_db.collection("test1");
  test.doc("test_item").get().then((doc) => {
    // document의 데이터를 가져옴
    console.log(doc.data());
    // document의 id를 가져옴
    console.log(doc.id);
  });
}


function RegisterScreen({ navigation }) {
  const [id, setid] = useState('');
  const [pw, setpw] = useState('');
  const [name, setname] = useState('');
  const [nickname, setnickname] = useState('');
  const [birth, setbirth] = useState('');



  return (
    <Box flex={1} bg={Colors.white}>
      {/* <Image flex={1} alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../assets/cover.png")}
      /> */}

      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>회원가입</Heading>
        <KeyboardAvoidingView>
          <ScrollView>
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}>
              <VStack space={8} pt="6">
                <Input
                  onChangeText={(id) => setid(id)}
                  InputLeftElement={
                    <MaterialIcons name="email" size={20} color="black" />
                  }
                  variant="underlined"
                  placeholder="ID"
                  pl={2}
                  w="70%"
                  color={Colors.main}
                  borderBottomColor={Colors.underline} />
                <Input
                  onChangeText={(pw) => setpw(pw)}
                  InputLeftElement={
                    <Ionicons name="eye" size={20} color="black" />
                  }
                  variant="underlined"
                  placeholder="Password"
                  pl={2}
                  w="70%"
                  type="password"
                  color={Colors.main}
                  borderBottomColor={Colors.underline} />
                <Input
                  onChangeText={(name) => setname(name)}
                  InputLeftElement={
                    <MaterialIcons name="supervised-user-circle" size={20} color="black" />
                  }
                  variant="underlined"
                  placeholder="이름"
                  pl={2}
                  w="70%"
                  color={Colors.main}
                  borderBottomColor={Colors.underline} />
                <Input
                  onChangeText={(nickname) => setnickname(nickname)}
                  variant="underlined"
                  placeholder="닉네임"
                  pl={2}
                  w="70%"
                  color={Colors.main}
                  borderBottomColor={Colors.underline} />

                <Input
                  onChangeText={(birth) => setbirth(birth)}
                  variant="underlined"
                  placeholder="생년월일 ex)20230415"
                  pl={2}
                  w="70%"
                  color={Colors.main}
                  borderBottomColor={Colors.underline} />

              </VStack>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
        <Button
          my={30}
          w="40%"
          rounded={50}
          onPress={
            () => {
              navigation.navigate("Login");
              //selectDB()
              //getImage()
              // console.log("id " + id)
              // console.log("pw " + pw)
              // console.log("name " + name)
              // console.log("nickname " + nickname)
              // console.log("birth " + birth)
            }
          }
        >
          회원가입
        </Button>
      </Box>
    </Box>
  )
}

export default RegisterScreen