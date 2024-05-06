import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import Notifications from "../screens/Notifications";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
      <Stack.Screen name="Notifications" component={Notifications}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;
