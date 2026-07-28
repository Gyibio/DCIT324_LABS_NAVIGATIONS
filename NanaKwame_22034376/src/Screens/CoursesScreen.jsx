import React from "react";
import { View, Text, FlatList } from "react-native";
import { COURSES } from "../data/dummyData";
import { styles } from "../styles/commonStyles";

export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enrolled Courses</Text>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              {item.code}: {item.title}
            </Text>
            <Text style={styles.cardSubtitle}>
              Credit Hours: {item.credits}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
