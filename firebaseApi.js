import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp  } from "firebase/firestore";
import { Alert } from 'react-native';

export async function registration(email, password, name, nickname, birthdate,phonenumber,address,detailedaddress) {
  const auth = getAuth();
  const firestore = getFirestore();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const currentUser = userCredential.user;

    const userDocRef = doc(firestore, "users", currentUser.uid);
    const order = new Date().getTime();

    await setDoc(userDocRef, {
      email: currentUser.email,
      //password: password,
      name: name,
      nickname: nickname,
      birthdate: birthdate,
      phonenumber: phonenumber,
      address: address,
      detailedaddress: detailedaddress,
      order: serverTimestamp() // 가입 시간이 찍힘
    });

    Alert.alert("회원가입 성공");
  } catch (err) {
    Alert.alert("Error", err.message);
  }
}