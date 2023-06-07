import {View,Button,Heading,IconButton,Input,  VStack,Icon,Text} from "native-base";
import React, { useState } from "react";
import Colors from "../styles/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { auth } from "../../firebaseConfig";
import { sendPasswordResetEmail } from 'firebase/auth';

function PwSearchScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      navigation.navigate('Login');
      //onsole.log('비밀번호 재설정 이메일이 전송되었습니다.');
      // 여기에서 이메일이 전송되었음을 알리는 알림 또는 화면 전환 등을 수행할 수 있습니다.
    } catch (error) {
      //console.error('비밀번호 재설정 이메일 전송 중 오류 발생:', error);
      // 오류가 발생했을 때 적절한 처리를 수행할 수 있습니다.
    }
  };

  return (
    <>
      <View bg="white" flexDirection="row" justifyContent="space-between">
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
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View flex={1} bg={Colors.white}>
          <View
            w="full"
            h="full"
            position="absolute"
            top="0"
            px="6"
            justifyContent="center"
            alignItems="center"
          >
            <Heading>비밀번호 찾기</Heading>
            <VStack space={2} pt="6">
            <Text>이메일</Text>
              <Input
                value={email}
                onChangeText={(value) => setEmail(value)}
                InputRightElement={
                  text.length > 0 ? (
                    <IconButton
                      backgroundColor="none"
                      onChangeText={
                        value => setData({ ...formData, name: value })
                      }
                      icon={
                        <MaterialIcons name="close" size={20} color="black" />
                      }
                      onPress={() => setEmail("")}
                    />
                  ) : null
                }
                variant="outline"
                placeholder="이메일"
                pl={2}
                w="80%"
                borderWidth={2}
                _focus={{
                  backgroundColor: "none",
                  borderColor: "black",
                }}
              />
            </VStack>
            <Button
            bg="black"
              my={30}
              w="40%"
              rounded={5}
              onPress={handleResetPassword}
            >
              비밀번호 찾기
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

export default PwSearchScreen;
