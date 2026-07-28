import React from "react";
import { View, Text, FlatList } from "react-native";
import { ANNOUNCEMENTS } from "../data/dummyData";
import { styles } from "../styles/commonStyles";

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Announcements</Text>
      <FlatList
        data={ANNOUNCEMENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.date}</Text>
            <Text style={styles.bodyText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
