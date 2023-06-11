import React, { useEffect, useState } from 'react';
import { Dimensions, useWindowDimensions } from 'react-native';
import { Fab, View, Icon, IconButton, Center, ScrollView, VStack, Pressable, Box, HStack, Image, Text, Spacer } from 'native-base';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useIsFocused } from '@react-navigation/native';


function SetItemsForms({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const width = useWindowDimensions().width;

  const [buttonData, setButtonData] = useState([]);
  const [btnStyle, setBtn] = useState(true);

  const screenFocus = useIsFocused();

  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      const firestore = getFirestore();
      const querySnapshot = await getDocs(collection(firestore, 'test'));
      //const data = querySnapshot.docs.map((doc) => doc.data());
      const data = querySnapshot.docs.map((doc) => {
        const buttonData = doc.data();
        const imageList = []; // 이미지 다운로드 링크를 저장할 배열
        for (let i = 1; i <= 5; i++) {
          // 이미지 다운로드 링크가 image1 ~ image5까지 있다고 가정
          const imageLink = buttonData[`image${i}`];
          if (imageLink) {
            imageList.push(imageLink);
          }
        }
        //console.log('Image List:', imageList);
        return {
          ...buttonData,
          imageList: imageList,
        };
      });
      setButtonData(data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView flex={1} >
        <View flex={1}>
          <View bg="white" alignItems="center" justifyContent="center">
            <Text mt={4} fontSize={20} color="black" bold>경매 리스트</Text>
            <View mt={4} bg="gray.200" h={0.5} w="full" />
          </View>
          <ScrollView mt={0} onScroll={
            (e) => {                          
              e.nativeEvent.contentOffset.y > 0 ? setBtn(false):
                setBtn(true);
              
            }}>
            <View flex={1} justifyContent="center" alignItems="center">
              <VStack >
                {buttonData.map((button, index) => (
                  <Pressable width={windowWidth} onPress={() => navigation.navigate('Single', {
                    title: button.title,
                    nickname: button.nickname,
                    category: button.category,
                    order: button.order,
                    description: button.description,
                    start_money: button.start_money,
                    imageList: button.imageList
                  })}>
                    {({ isHovered, isPressed }) => (
                      <View
                        m={0}
                        bg={isPressed ? 'coolGray.100' : isHovered ? 'coolGray.100' : 'white'}
                        pt={4}
                        pb={4}
                        pl={3}
                        pr={3}
                        borderTopColor="white"
                        borderBottomColor="coolGray.300"
                        borderBottomWidth={1}
                        borderColor="coolGray.300"
                      >
                        <HStack space={3} >
                          <Image source={{ uri: button.image1 }} w="120" h="120" borderRadius={8} borderWidth={1} borderColor="gray.300" />
                          <VStack>
                            <Text fontWeight="medium" color="black" fontSize="18">
                              {button.title}
                            </Text>
                            <Text bold fontSize="18" color="black">
                              현재 최고가: {button.start_money}원
                            </Text>
                            <Text mt="2" fontSize="sm" color="coolGray.700">
                              경매 시작가: {button.start_money}원
                            </Text>
                            <Text fontSize="sm" color="coolGray.700">
                              남은 시간: 6시간 47분
                            </Text>
                            {/* <Text ml="2" fontSize="sm" color="coolGray.700">
                              판매자: {button.nickname}
                            </Text> */}
                          </VStack>
                        </HStack>
                        <Spacer />
                      </View>
                    )}
                  </Pressable>
                ))}
                <View m={2}></View>
              </VStack>
            </View>
          </ScrollView>
          {screenFocus ? <Box position="relative" w="100%">
            <Fab
              onPress={() => (navigation.navigate("ProductR"))}
              _pressed={{ bg: "gray.600" }}
              p={4}
              mb={windowHeight / 15}
              bg="gray.800"
              shadow={0}
              position="absolute"
              size="sm"
              icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
              label={btnStyle ? <Text color="white" fontSize="sm">
                물품 등록
              </Text> : null}
            />
          </Box> : null}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SetItemsForms;