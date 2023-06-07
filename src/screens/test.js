import { FlatList, Text, View } from "native-base";

import React, { useState, useEffect, ActivityIndicator } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const renderItem = ({ item }) => {
   return (
      <View>
         <View>
            <Text>user id: {item.userId}</Text>
         </View>
         <View>
            <Text>id: {item.id}</Text>
         </View>
         <View>
            <Text>title: {item.title}</Text>
         </View>
         <View>
            <Text>body: {item.body}</Text>
         </View>
      </View>
   );
};

const LIMIT = 11;

export default function test() {
   const [data, setData] = useState([]);
   const [offset, setOffset] = useState(0);
   const [loading, setLoading] = useState(false);

   const getData = () => {
      setLoading(true);
      fetch("http://jsonplaceholder.typicode.com/posts")
         .then((res) => res.json())
         .then((res) => setData(data.concat(res.slice(offset, offset + LIMIT))))
         .then(() => {
            setOffset(offset + LIMIT);
            setLoading(false);
         })
         .catch((error) => {
            setLoading(false);
            Alert.alert("에러가 났습니다");
         });
   };

   useEffect(() => {
      getData();
   }, []);

   const onEndReached = () => {
      if (loading) {
         return;
      } else {
         getData();
      }
   };
   return (
      <SafeAreaView >
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.8}
            ListFooterComponent={loading && <ActivityIndicator />}
         />
      </SafeAreaView>
   );

}