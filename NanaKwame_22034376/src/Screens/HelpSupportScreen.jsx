import React from "react";
import { View, Text, FlatList } from "react-native";
import { FAQS } from "../data/dummyData";
import { styles } from "../styles/commonStyles";

export default function HelpSupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Frequently Asked Questions</Text>
      <FlatList
        data={FAQS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.question}</Text>
            <Text style={styles.bodyText}>{item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
}
