import { Button, Heading, Image, Input, Text, View, VStack, Icon, IconButton, HStack, ScrollView,useToast,toast } from "native-base";
import React, { useState } from "react";
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Dimensions, } from "react-native";
import Colors from "../styles/colors";
import { } from "react-native-gesture-handler";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase/app";
import { registration } from "../../firebaseApi";

import "firebase/database";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebase_db from "../../firebaseConfig";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/
  
  const emailCheck = (username) => {
    return emailRegEx.test(username); 
  }

  const passwordCheck = (password) => {
    return passwordRegEx.test(password); 
  }

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
    <SafeAreaProvider>
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();          
        }}
      >       
          <ScrollView
            showsVerticalScrollIndicator={false}
            bg="white"
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
                  onChangeText={(value) => {setEmail(value); emailCheck(value)}}
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
                  borderColor= {(email.length == 0 || emailCheck(email) ? "gray.300" : "red.600")}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: (email.length == 0 || emailCheck(email) ? "black" : "red.600")
                  }}
                />
                {email.length == 0 || emailCheck(email) ? null : <Text fontSize={12} color="red.600">이메일 형식이 맞지 않습니다.</Text>}
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
                  maxLength={20}
                  placeholder="비밀번호"
                  borderColor={(password.length == 0 || (passwordCheck(password) && password.length > 7) ? "gray.300" : "red.600")}
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: (password.length == 0 || (passwordCheck(password) && password.length > 7) ? "black" : "red.600"),
                    
                  }}
                />
                {password.length == 0 || (passwordCheck(password) && password.length > 7) ? null : <Text fontSize={12} color="red.600">영문, 숫자, 특수문자를 포함한 8-20자리</Text>}
               
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
                  borderColor= {((password == confirmPassword && confirmPassword.length > 7) || confirmPassword == 0  ? "gray.300" : "red.600")}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: ((password == confirmPassword && confirmPassword.length > 7) || confirmPassword == 0  ? "black" : "red.600"),
                  }}
                />
                {(confirmPassword.length > 7 && password == confirmPassword) || confirmPassword == 0 ? null : <Text fontSize={12} color="red.600">비밀번호가 일치하지 않습니다.</Text>}
                <HStack space={5} justifyContent="space-between">
                  <VStack space={2}>
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
                  <VStack space={2}>
                    <Text>생년월일</Text>
                    <Input
                      keyboardType="numeric"                      
                      value={birthdate} // 값 설정
                      onChangeText={(value) => setBirthdate(value)}
                      variant="outline"
                      placeholder="ex)20230415"
                      maxLength={8}
                      w="140"
                      borderWidth={2}
                      borderColor={(birthdate.length == 0 || birthdate.length == 8 ? "gray.300" : "red.600")}
                      _focus={{
                        backgroundColor: "none",
                        borderColor: (birthdate.length == 0 || birthdate.length == 8 ? "black" : "red.600"),
                      }}
                    />
                    {birthdate.length == 0 || birthdate.length == 8 ? null : <Text fontSize={12} color="red.600">8자리를 입력해주세요.</Text>}
                  </VStack>                  
                </HStack>
                <Text>휴대 전화 번호</Text>
                <Input
                  value={phonenumber} // 값 설정
                  onChangeText={(value) => setPhonenumber(value)}
                  keyboardType="numeric"
                  variant="outline"
                  placeholder="'-' 없이"

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
                  my={30}
                  w="287"
                  rounded={5}
                  backgroundColor={ 
                    (email.length > 0 && 
                    password.length > 7 && 
                    confirmPassword.length > 7 && 
                    name.length > 0 &&
                    nickname.length > 0 &&
                    birthdate.length > 0 &&
                    phonenumber > 0 &&
                    address > 0 &&
                    detailedaddress > 0
                    ) 
                    ? "black" : "gray.400"
                  }
                  disabled={!(email.length > 0 && password.length > 7)}
                  onPress={handleRegistration}
                >
                  회원가입
                </Button>
              </VStack>
            </View>
          </ScrollView>

      </TouchableWithoutFeedback>
      </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

export default RegisterScreen;