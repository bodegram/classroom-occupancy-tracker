import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ListItem, Icon } from "@rneui/themed";

export default function ProfileItem({ icon, name, navigate }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
      <ListItem>
        {icon}
        <ListItem.Content>
          <ListItem.Title style={{color:'black'}}>{name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="black" />
      </ListItem>
    </TouchableOpacity>
  );
}
