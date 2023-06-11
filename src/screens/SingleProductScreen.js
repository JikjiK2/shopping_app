import { useDisclose, Actionsheet, Modal, Input, Image, Text, Box, ScrollView, HStack, NumberInput, Button, View, Icon, IconButton, VStack } from 'native-base'
import React, { useState, useEffect } from 'react'
// import { getFirestore, doc, setDoc, addDoc, serverTimestamp, getDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadString, uploadBytes, getDownloadURL } from "firebase/storage";
import { where, getFirestore, doc, setDoc, addDoc, serverTimestamp, getDoc, collection, addDocument, getDocs, query } from "firebase/firestore";
import Rating from '../components/Rating'
import Colors from '../styles/colors'
import NumericInput from 'react-native-numeric-input'
import Review from '../components/Review'
import { MaterialIcons , Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { SliderBox } from 'react-native-image-slider-box';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import db1 from "../../firebaseConfig"
import { Keyboard, Dimensions, TouchableWithoutFeedback } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



function SingleProductScreen({ navigation, route }) {

  const { title, nickname, category, description, start_money, order, imageList } = route.params;
  const [value, setValue] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [money, setMoney] = useState(""); //입찰금액
  const [bottomSheet, setSheet] = useState(500);

  const orderDate = order.toDate();
  const year = orderDate.getFullYear();
  const month = orderDate.getMonth() + 1;
  const date = orderDate.getDate();
  const hours = orderDate.getHours();
  const minutes = orderDate.getMinutes();

  let period = "오전";
  let formattedHours = hours;
  if (hours >= 12) {
    period = "오후";
    formattedHours = hours - 12;
  }
  if (formattedHours === 0) {
    formattedHours = 12;
  }
  const formattedDate = `${year}년 ${month}월 ${date}일`;
  const formattedTime = `${period} ${formattedHours}시 ${minutes}분`;
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView flex={1} >
          <View flex={1}>            
            <ScrollView showsVerticalScrollIndicator={false}>
            
              <SliderBox
                images={imageList}
                sliderBoxHeight={400}
                dotColor="#ffffff"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                imageLoadingColor="black"
              />
              <View padding={5}>

                <HStack

                  alignItems="center"
                  space={2}
                >
                  <Box borderRadius={50} bg="gray.300" p={2}>
                    <Icon as={MaterialIcons} name="person" size="7" color="black" />
                  </Box>
                  <Text ml={2} fontSize={19}>{nickname}</Text>
                  <HStack flex={1} justifyContent="flex-end">
                    <Button
                      bg="black"
                      disabled>
                      경매 진행 중
                    </Button>
                    <View>
                      <Button
                        bg="gray.300"
                        disabled
                      >
                        <Text >경매종료</Text>
                      </Button>

                    </View>
                  </HStack>
                </HStack>
                <View mt={4} mb={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                </View>
                <View padding={2}>
                  <HStack>
                    <Text bold fontSize={20}>{title}</Text>
                  </HStack>

                  <HStack mt={1} ml={2}>
                    <Text mr={1} fontSize={12} color="grey">{category}</Text>
                    <Text mr={1} fontSize={12} color="grey">·</Text>
                    <Text fontSize={12} color="grey">{formattedDateTime}</Text>
                  </HStack>
                  <Text
                    mt={4}
                    lineHeight={24}
                    fontSize={12}
                  >
                    {description}
                  </Text>
                </View>
                <View mt={4} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                </View>
              </View>
            </ScrollView>
            <View pt={2} pb={2} pl={10} pr={10}
              style={{
                borderWidth: 1,
                borderTopColor: 'grey',
                borderBottomColor: 'white',
                borderLeftColor: 'white',
                borderRightColor: 'white',
                borderStyle: 'solid'
              }}>
              <HStack alignItems="center" justifyContent="center">
                <Button
                  onPress={
                    onOpen
                  }

                  bg={Colors.black}
                  color={Colors.white}
                  w={windowWidth - 40}
                >
                  입찰하기
                </Button>
                <TouchableWithoutFeedback
                  onPress={() => {
                    Keyboard.dismiss();
                    setSheet(220)
                  }}
                >
                  <Actionsheet isOpen={isOpen} onClose={onClose} >
                    <Actionsheet.Content h={windowHeight-bottomSheet}>
                      <VStack mt={3} space={5}>

                        <Text fontSize={20}>현재 소지 금액 : 1,000</Text>

                        <Input
                          value={money} // 값 설정
                          onChangeText={(value) => setMoney(value)}
                          keyboardType="numeric"
                          variant="outline"
                          placeholder="희망 입찰 금액"
                          fontSize={15}
                          _focus={{
                            backgroundColor: "none",
                            borderColor: "black",
                          }}                   
                          onFocus={()=>setSheet(220)}
                          onBlur={()=>setSheet(500)}      
                        />
                        <Button
                          onPress={
                            () => setShowModal(true)
                          }
                          bg={Colors.black}
                          color={Colors.white}
                          w={windowWidth - 40}
                        >
                          입찰하기
                        </Button>
                      </VStack>
                    </Actionsheet.Content>
                  </Actionsheet>
                </TouchableWithoutFeedback>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header bg="white">입찰하기</Modal.Header>
                    <Modal.Body borderWidth={0} padding={0} bg="white">
                      <View p={5}>
                        <Text fontSize={17}>입찰하시겠습니까?</Text>
                      </View>
                    </Modal.Body>                    
                    <Modal.Footer bg="white">
                      <Button
                        bg="white"                        
                        onPress={() => { setShowModal(false)}}>
                        <Text color="black">
                          취소
                        </Text>
                      </Button>
                      <Button
                        ml={5}
                        bg="black"
                        onPress={() => { setShowModal(false), onClose}}>
                        확인
                      </Button>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              </HStack>
              <View style={{backgroundColor: 'transparent', position: 'absolute', right: windowWidth-50, bottom: windowHeight-75, height: 50, width: 50}}
              flexDirection="row" justifyContent="flex-start">
              <IconButton icon={<Icon as={Ionicons} name="chevron-back" size="7" color="black" />}
                onPress={() => navigation.pop()} />                
            </View>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}


export default SingleProductScreen