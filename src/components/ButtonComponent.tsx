import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>
      {/* <Button title='Learn More' onPress={()=>alert("button is pressed")} color={"teal"} /> */}
      <Pressable onPress={()=>alert("button is pressed")} style={{backgroundColor:"teal", padding: 10, margin: 10}}>
        <Text>ON Press</Text>
        </Pressable>

      <Pressable onPressIn={()=>alert("button is pressedIn")} style={{backgroundColor:"teal", padding: 10, margin: 10}}>
        <Text>Press in </Text>
        </Pressable>
      <Pressable onPressOut={()=>alert("button is pressedout")} style={{backgroundColor:"teal", padding: 10, margin: 10}}>
        <Text>Press out </Text>
        </Pressable>
      <Pressable onLongPress={()=>alert("button is longed press")} style={{backgroundColor:"teal", padding: 10, margin: 10}}>
        <Text>Press long </Text>
        </Pressable>
    </View>
  )
}

export default ButtonComponent