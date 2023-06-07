import { Button, Heading, Image, Input, Text, View, VStack, Icon, IconButton, HStack, ScrollView,useToast,toast } from "native-base";
import React, { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, Keyboard, TouchableWithoutFeedback, Dimensions, } from "react-native";
import Colors from "../styles/colors";
import { } from "react-native-gesture-handler";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase/app";
import { registration } from "../../firebaseApi";

import "firebase/database";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebase_db from "../../firebaseConfig";
/*
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
*/
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState(""); //이메일
  const [password, setPassword] = useState(""); //비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); //비밀번호 확인
  const [name, setName] = useState(""); //이름
  const [nickname, setNickname] = useState(""); //닉네임
  const [birthdate, setBirthdate] = useState(""); //생년월일
  const [phonenumber, setPhonenumber] = useState(""); //전화번호
  const [address, setAddress] = useState(""); //주소
  const [detailedaddress, setDetailedaddress] = useState(""); //상세주소

  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState("");

  const toast = useToast();


  const handleClick = () => setShow(!show);
  const handleRegistration = () => {
    if (!email || !password || !name || !nickname || !birthdate || !phonenumber || !address || !detailedaddress) {
      toast.show({
        duration: 2000,
        description: "모든 필드를 입력해주세요."
      })
      return;
    }
    if (password !== confirmPassword) {
      toast.show({
        duration: 2000,
        description: "비밀번호가 일치하지 않습니다."
      })
      return;
    }
    registration(email, password, name, nickname, birthdate, phonenumber, address, detailedaddress)
      .then(() => {
        toast.show({
          duration: 2000,
          description: "회원가입 성공!"
        })
        navigation.navigate("Login");
      })
      .catch((error) => {
        toast.show({
          duration: 2000,
          description: "Error"
        })
      });
  };
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
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  InputRightElement={
                    text.length > 0 ? (
                      <IconButton
                        icon={
                          <MaterialIcons name="close" size={20} color="grey" />
                        }
                        onPress={() => setEmail("")}
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
                  value={password} // 값 설정
                  onChangeText={(value) => setPassword(value)}
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
                  value={confirmPassword} // 값 설정
                  onChangeText={(value) => setConfirmPassword(value)}
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
                      value={name} // 값 설정
                      onChangeText={(value) => setName(value)}
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
                      value={birthdate} // 값 설정
                      onChangeText={(value) => setBirthdate(value)}
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
                  value={phonenumber} // 값 설정
                  onChangeText={(value) => setPhonenumber(value)}
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
                  value={nickname} // 값 설정
                  onChangeText={(value) => setNickname(value)}
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
                  value={address} // 값 설정
                  onChangeText={(value) => setAddress(value)}
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
                  value={detailedaddress} // 값 설정
                  onChangeText={(value) => setDetailedaddress(value)}
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
                  onPress={handleRegistration
                    //selectDB()
                    //getImage()
                    // console.log("id " + id)
                    // console.log("pw " + pw)
                    // console.log("name " + name)
                    // console.log("nickname " + nickname)
                    // console.log("birth " + birth)
                  }
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