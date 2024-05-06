import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.card}>
      <Text>Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
       backgroundColor:'green',
       paddingVertical:25,
       paddingHorizontal:10,
       borderRadius:5
    }
})