import { View, Text, Button } from "react-native"
import React from "react"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"

const ChatScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>ChatScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("Home")
        }}
      />
    </View>
  )
}

export default ChatScreen
