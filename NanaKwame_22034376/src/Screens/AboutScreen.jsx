import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/commonStyles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.bodyText}>
        Your all-in-one student hub for university updates and schedules.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Developer Details</Text>
        <Text style={styles.bodyText}>Name: John Doe</Text>
        <Text style={styles.bodyText}>Student ID: 10123456</Text>
      </View>
    </View>
  );
}
