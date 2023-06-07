import { IconButton, View, Icon } from "native-base";
import React from "react";
import Colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

function TopLeftBack({navigation}) {
  return (
    <>
      <View>
        <View
          flexDirection="row"
          justifyContent="space-between"
        >
          <IconButton
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
      </View>
    </>
  );
}

export default TopLeftBack;
