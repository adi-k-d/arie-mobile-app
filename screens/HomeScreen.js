import { View, Text, Button } from "react-native"
import React from "react"
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Chat"
        onPress={() => {
          navigation.navigate("Chat")
        }}
      />
    </View>
  )
}

export default HomeScreen
