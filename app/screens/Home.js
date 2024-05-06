import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='green'/>
      <ScrollView>
        <View style={{paddingVertical:10}}>
          <Text style={{fontSize:35, color:'black'}}>Let's Learn New Stuff!</Text>
        </View>
        <Card/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor:"white",
    flex:1
  },
});
