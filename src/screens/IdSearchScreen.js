import {
  Button,
  Heading,
  IconButton,
  Input,
  View,
  VStack,
  Icon,
  Text,
} from "native-base";
import React from "react";
import Colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

function IdSearchScreen({ navigation }) {
  const [text, setText] = React.useState("");
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
          console.log("dismissed keyboard"); //console 확인용
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
            <Heading>이메일 찾기</Heading>
            <VStack space={2} pt="6">
            <Text>이름</Text>
                <Input
                  variant="outline"
                  placeholder="이름"
                  
                  w="70%"
                  borderWidth={2}
                  _focus={{
                    backgroundColor: "none",
                    borderColor: "black",
                  }}
                />
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
            </VStack>
            <Button
            bg="black"
              my={30}
              w="40%"
              rounded={5}
              onPress={() => navigation.pop()}
            >
              아이디 찾기
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

export default IdSearchScreen;
