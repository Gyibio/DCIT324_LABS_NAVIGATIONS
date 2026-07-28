import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/commonStyles";

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.cardSubtitle}>Date: {event.date}</Text>
      <Text style={styles.bodyText}>{event.description}</Text>
      <Button title="Back to Feed" onPress={() => navigation.goBack()} />
    </View>
  );
}
