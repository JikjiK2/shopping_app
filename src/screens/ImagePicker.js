import React, { useState, useEffect } from 'react';
import { Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { View, Button, Modal, VStack, Text, Pressable, Box } from 'native-base';

function ImagePickerabc() {
   const [image, setImage] = useState(null);
   const [image1, setImage1] = useState(null);

   const getPermission = async () => {
      const {
         status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
         alert('게시글을 업로드하려면 사진첩 권한이 필요합니다.');
         return false;
      }
      return true;
   }

   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
         setImage(result.assets[0].uri);
      }
   };

   const filmImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
         setImage1(result.assets[1].uri);
      }
   };

   const [showModal, setShowModal] = useState(false);


   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button onPress={() => setShowModal(true)}>Button</Button>
         <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
               <Modal.CloseButton />
               <Modal.Header>사진 가져오기</Modal.Header>
               <Modal.Body padding={0} borderBottomWidth="0.8" borderBottomColor="light.400">
                  <Pressable
                     onPress={
                        filmImage
                     }
                  >
                     <View>
                        <Text bg="blue" margin={5}>
                           직접 촬영
                        </Text>
                     </View>
                  </Pressable>
               </Modal.Body>
               <Modal.Body padding={0} justifyContent="flex-start" >
                  <Pressable
                     onPress={
                        pickImage
                     }>
                     <View>
                        <Text margin={5}>
                           갤러리에서 가져오기
                        </Text>
                     </View>
                  </Pressable>
               </Modal.Body>
               <Modal.Footer>
                  <Button
                     bg="black"
                     onPress={() => {
                        setShowModal(false);
                     }}>
                     취소
                  </Button>

               </Modal.Footer>
            </Modal.Content>
         </Modal>

         <View>
            <ImageBackground source={{ uri: image }} style={{ width: 100, height: 100 }}>
               <Text style={styles.text}>Inside</Text>
            </ImageBackground>
         </View>
         {image && <View>
            <ImageBackground source={{ uri: image }} style={{ width: 100, height: 100 }}>
               <Text style={styles.text}>Inside</Text>
            </ImageBackground>
         </View>}
         <IconButton icon={<Icon as={Entypo} name="emoji-happy" />} 
         borderRadius="full" 
         _icon={{            
            size: "md"
         }}          
          />

      </View>
   );
}

export default ImagePickerabc


