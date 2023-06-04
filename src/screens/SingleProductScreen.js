import { Spacer, Image, Text, Box, ScrollView, HStack, NumberInput, Button, View, Icon, IconButton } from 'native-base'
import React, { useState } from 'react'
import Rating from '../components/Rating'
import Colors from '../styles/colors'
import NumericInput from 'react-native-numeric-input'
import Review from '../components/Review'
import { MaterialIcons } from "@expo/vector-icons";


function SingleProductScreen({ navigation }) {
  const [value, setValue] = useState(0);
  return (
    <>
      <View bg={Colors.main} flexDirection="row" justifyContent="space-between">
        <IconButton icon={<Icon as={MaterialIcons} name="keyboard-backspace" size="7" color="white" />}
          onPress={() => navigation.pop()} />
        {/* <IconButton icon={<Icon as={MaterialIcons} name="logout" size="7" color="white" alignSelf="flex-end" />}
            onPress={() => navigation.navigate("Login")} />          */}
      </View>
      <Box safeArea flex={1} bg={Colors.white}>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image
            source={require("../assets/products/basketball1.jpeg")}
            alt="Image"
            w="full"
            h={300}
            resizeMode="contain"
          />

          <HStack
          justifyContent="space-between"
            space={2}
            //alignItems="center"
            my={5}>
            {/* <Spacer /> */}
            <Text fontSize={19}>농구공</Text>
            <Text
              textAlign="right"
              color={Colors.black}
              fontSize={19}
            >
             5,000원
            </Text>
          </HStack>
          <Text
            lineHeight={24}
            fontSize={12}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Button
          bg={Colors.black}
          color={Colors.white}
          mt={10}
        >
          입찰하기
        </Button>
          {/* <Review /> */}
        </ScrollView>
      </Box>
    </>
  )
}

export default SingleProductScreen