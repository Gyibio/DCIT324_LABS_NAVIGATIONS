import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TIMETABLE } from '../data/dummyData';
import { styles } from '../styles/commonStyles';

export default function TimetableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Class Timetable</Text>
      <FlatList
        data={TIMETABLE}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.day} — {item.course}</Text>
            <Text style={styles.bodyText}>Time: {item.time}</Text>
            <Text style={styles.cardSubtitle}>Venue: {item.venue}</Text>
          </View>
        )}
      />
    </View>
  );
}