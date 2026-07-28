import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FEED_EVENTS } from "../data/dummyData";
import { styles } from "../styles/commonStyles";

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Campus News & Events</Text>
      <FlatList
        data={FEED_EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("EventDetails", { event: item })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
