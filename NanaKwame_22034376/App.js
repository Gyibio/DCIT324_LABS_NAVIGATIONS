import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import createnativeStackNavigator from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import Main from "./Screens/Main";
import { Pressable, Image } from "react-native";

const Stack = createNativeStackNavigator({
  screenOptions: ({ navigation }) => ({
    headerLeft: () => (
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={back} style={{ marginRight: 10 }} />
      </Pressable>
    ),
  }),

  screens: {
    Welcome: {
      screen: Welcome,
      options: {
        title: "welcome",
      },
    },

    Main: {
      screen: Main,
      options: {
        title: "main",
      },
    },
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
