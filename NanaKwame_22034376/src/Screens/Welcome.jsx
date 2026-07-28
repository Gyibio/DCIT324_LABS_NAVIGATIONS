import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/commonStyles";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.title}>Welcome to Campus Connect</Text>
      <Button title="Get Started" onPress={() => navigation.navigate("Main")} />
    </View>
  );
}
