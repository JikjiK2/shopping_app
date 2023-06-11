import React, { useState, useEffect } from 'react'
import SetItemsForm from "../screens/SetItemsForms";

function BoardScreen({ navigation }) {
  const [buttonData, setButtonData] = useState([]);

  useEffect(() => {
    // Firestore에서 데이터 가져오기
    const fetchData = async () => {
      const firestore = getFirestore();
      const querySnapshot = await getDocs(collection(firestore, 'tset'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setButtonData(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <SetItemsForm buttonData={buttonData} navigation={navigation} />
      <SetItemsForm navigation={navigation} showAllButtons={false} />
    </>
  )
}

export default BoardScreen