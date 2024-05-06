import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";


function Navigator() {
  return (
   <NavigationContainer>
    <AuthNavigator/>
   </NavigationContainer>
  );
}

export default Navigator