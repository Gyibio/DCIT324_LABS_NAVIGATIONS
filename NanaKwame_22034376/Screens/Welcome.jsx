import {StyleSheet, View, Text, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
export default function Welcome() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button onPress={()=> navigation.navigate("Main")} title='get started'></Button>
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
