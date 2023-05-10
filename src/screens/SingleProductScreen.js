import { Spacer, Image, Text, Box, ScrollView, Heading, HStack, NumberInput, Button } from 'native-base'
import React, { useState } from 'react'
import Rating from '../components/Rating'
import Colors from '../styles/colors'
import NumericInput from 'react-native-numeric-input'
import Review from '../components/Review'

function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/products/basketball1.jpeg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading          
          bold
          fontSize={17}
          mb={2}
          >농구공 1
        </Heading>        
        <HStack
          space={2}
          alignItems="center"
          my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.black}
            leftButtonBackgroundColor={Colors.black}
          />
          <Spacer />
          <Heading
            bold
            color={Colors.black}
            fontSize={19}
          >
            5,000원
          </Heading>
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
          장바구니 추가
        </Button>
        <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen