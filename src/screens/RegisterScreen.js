import {
  Button,
  Heading,
  Image,
  Input,
  Text,
  View,
  VStack,
  Icon,
  IconButton,
  HStack,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Colors from "../styles/colors";
import { } from "react-native-gesture-handler";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import * as firebase from "firebase/app";

import "firebase/database";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebase_db from "../../firebaseConfig";

const getImage = async () => {
  let url = "";
  try {
    const fileRef = firebase_db.ref().child("로그인.png");
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
  test
    .doc("test_item")
    .get()
    .then((doc) => {
      // document의 데이터를 가져옴
      console.log(doc.data());
      // document의 id를 가져옴
      console.log(doc.id);
    });
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function RegisterScreen({ navigation }) {
  const [id, setid] = useState("");
  const [pw, setpw] = useState("");
  const [name, setname] = useState("");
  const [nickname, setnickname] = useState("");
  const [birth, setbirth] = useState("");

  const [show, setShow] = React.useState(false);

  const [text, setText] = React.useState("");

  const handleClick = () => setShow(!show);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View bg="white">
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
          <View bg="white" flexDirection="row" alignItems="flex-start">
                <IconButton
                backgroundColor="none"
                  icon={
                    <Icon
                      as={MaterialIcons}
                      name="keyboard-backspace"
                      size="7"
                      color="black"
                    />
                  }
                  onPress={() => navigation.pop()}
                />
              </View>
            <View flex={1} alignItems='center'>
              
              <VStack space={2} pt="6">
                <Heading alignSelf="center">회원가입</Heading>
                <Text>이메일</Text>
                <Input
                  value={text}
                  onChangeText={(value) => setText(value)}
                  InputRightElement={
                    text.length > 0 ? (
                      <IconButton
                        icon={
                          <MaterialIcons name="close" size={20} color="grey" />
                        }
                        onPress={() => setText("")}
                      />
                    ) : null
                  }
                  variant="outline"
                  placeholder="이메일 주소"
                  
                  w="70%"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />
                <Text>비밀번호</Text>
                <Input
                  InputRightElement={
                    <IconButton
                      icon={
                        show ? (
                          <Ionicons name="eye" size={20} color="grey" />
                        ) : (
                          <Ionicons name="eye-off" size={20} color="grey" />
                        )
                      }
                      onPress={handleClick}
                    />
                  }
                  type={show ? "text" : "password"}
                  w="70%"
                  py="0"
                  placeholder="비밀번호"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />
                <Text>비밀번호 확인</Text>
                <Input
                  InputRightElement={
                    <IconButton
                      icon={
                        show ? (
                          <Ionicons name="eye" size={20} color="grey" />
                        ) : (
                          <Ionicons name="eye-off" size={20} color="grey" />
                        )
                      }
                      onPress={handleClick}
                    />
                  }
                  type={show ? "text" : "password"}
                  w="70%"
                  py="0"
                  placeholder="비밀번호 확인"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />

                <HStack space={5}>
                  <VStack>
                    <Text>이름</Text>
                    <Input
                      onChangeText={(name) => setname(name)}
                      variant="outline"
                      placeholder="이름"
                      
                      w="100"
                      borderWidth={2}
                      _focus={{
                        backgroundColor: "none",
                        borderColor: "black",
                      }}
                    />
                  </VStack>
                  <VStack>
                    <Text>생년월일</Text>
                    <Input
                      keyboardType="numeric"
                      onChangeText={(birth) => setbirth(birth)}
                      variant="outline"
                      placeholder="ex)20230415"
                      
                      w="140"
                      borderWidth={2}
                      _focus={{
                        backgroundColor: "none",
                        borderColor: "black",
                      }}
                    />
                  </VStack>
                </HStack>
                <Text>휴대 전화 번호</Text>
                <Input
                  keyboardType="numeric"
                  variant="outline"
                  placeholder="휴대 전화 번호  '-' 없이"
                  
                  w="70%"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />

                <Text>닉네임</Text>
                <Input
                  onChangeText={(nickname) => setnickname(nickname)}
                  variant="outline"
                  placeholder="닉네임"
                  
                  w="70%"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />
                <Text>주소</Text>
                <Input
                  variant="outline"
                  placeholder="주소"
                  
                  w="70%"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />
                <Text>상세 주소</Text>
                <Input
                  variant="outline"
                  placeholder="상세 주소"
                  
                  w="70%"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />
                <Button
                
                  disabled={false}
                  my={30}
                  w="287"
                  rounded={5}
                  backgroundColor="black"
                  onPress={() => {
                    navigation.navigate("Login");
                    //selectDB()
                    //getImage()
                    // console.log("id " + id)
                    // console.log("pw " + pw)
                    // console.log("name " + name)
                    // console.log("nickname " + nickname)
                    // console.log("birth " + birth)
                  }}
                >
                  회원가입
                </Button>
              </VStack>



            </View>
          </ScrollView>
        </View>


      </TouchableWithoutFeedback>
    </>
  );
}

export default RegisterScreen;
