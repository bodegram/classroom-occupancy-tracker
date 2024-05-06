import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import ProfileItem from "../components/ProfileItem";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profile}>
          <View style={styles.profileImage}>
            <FontAwesome name="user-circle" size={60} color="black" />
          </View>
          <View>
            <Text style={styles.username}>Awofisan Samuel</Text>
          </View>
        </View>
        <View style={styles.profileMenu}> 
          <ProfileItem
            name="Personal Settings"
            icon={<Entypo name="pencil" size={20} color="green" />}
          />
          <ProfileItem
            name="Accounts"
            icon={<FontAwesome name="user-circle" size={20} color="green" />}
          />
          <ProfileItem
            name="Security"
            icon={
              <MaterialCommunityIcons name="security" size={20} color="green" />
            }
          />
          <ProfileItem
            name="Help"
            icon={<Ionicons name="help" size={20} color="green" />}
          />
          <ProfileItem
            name="Notifications"
            icon={
              <Ionicons name="notifications-circle" size={22} color="green" />
            }
            navigate='Notifications'
          />
           <ProfileItem
            name="Sign out"
            icon={
              <Entypo name="log-out" size={20} color="green" />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    alignSelf: "center",
  },
  username: {
    textAlign: "center",
    color:'green'
  },
  profile: {
    paddingVertical: 35,
  },
  profileMenu: {
    backgroundColor:'white',
    paddingVertical:20
  },
});
