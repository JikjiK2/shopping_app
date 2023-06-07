import {
  View,
  Button,
  Heading,
  IconButton,
  Input,  
  VStack,
  Icon,
  Text
} from "native-base";
import React from "react";
import Colors from "../styles/colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

function PwSearchScreen({ navigation }) {
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
                value={text}
                onChangeText={(value) => setText(value)}
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
                      onPress={() => setText("")}
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
              onPress={() => navigation.pop()}
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
