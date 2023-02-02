import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default Signup = () => {
  const [mobile, setMobile] = useState("");
  const Otp = () => {
    return (
      <View>
        <Text>Otp logic</Text>
      </View>
    );
  };
  const Mobileno = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="number-pad"
          onChangeText={(text) => setMobile(text)}
          value={mobile}
          placeholderTextColor="white"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Otp")}
        >
          <Text style={styles.buttonText}>Send Otp</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mobileno" component={Mobileno} />
      <Stack.Screen name="Otp" component={Otp} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b3433",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgb(132,194,37)",
    width: "80%",
    marginBottom: 10,
    borderRadius: 5,
    color: "white",
  },
  button: {
    backgroundColor: "rgb(132,194,37)",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#3b3433",
    fontWeight: "bold",
  },
});
