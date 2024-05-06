import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeLayout from "../components/layouts/HomeLayout";
import { loginAsync } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const handleSubmit = () => {
    dispatch(loginAsync({email, password}))
    console.log('login dispatched'); 
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="green" />
      <HomeLayout>
        <View style={styles.loginFields}>
          <Image
            source={require("../assets/funaab.png")}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              marginTop: 20,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              marginBottom: 25,
              marginTop: 10,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Hey there!
          </Text>
          <View style={styles.inputContainer}>
            <Text style={{ marginBottom: 4 }}>Email Address</Text>
            <TextInput style={styles.input} placeholder="youremail@here.com" onChangeText={(text)=>setEmail(text)} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ marginBottom: 4 }}>Password</Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 10,
                marginTop: 36,
                zIndex: 1,
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <FontAwesome name="eye-slash" size={24} color="black" />
              ) : (
                <FontAwesome name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="********"
              secureTextEntry={showPassword ? true : false}
              onChangeText={(text)=>setPassword(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <View>
              <View style={{ flexDirection: "row" }}>
                <TextInput style={{ backgroundColor: "ghostwhite" }} />
                <Text>Remember me</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                <Text style={{ textDecorationStyle: "solid" }}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Button
              text="Sign in"
              handlePress={handleSubmit}
              bg="green"
              textColor="white"
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "green" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </HomeLayout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    flex: 1,
    backgroundColor: "white",
  },
  loginFields: {},
  input: {
    backgroundColor: "ghostwhite",
    padding: 14,
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
});
