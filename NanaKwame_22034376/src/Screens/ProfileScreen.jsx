import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/commonStyles";

export default function ProfileScreen({ navigation, profile }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{profile.name}</Text>
      <Text style={styles.bodyText}>Index Number: {profile.indexNumber}</Text>
      <Text style={styles.bodyText}>Programme: {profile.programme}</Text>
      <Text style={styles.bodyText}>Level: {profile.level}</Text>
      <Text style={styles.bodyText}>Bio: {profile.bio}</Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate("EditProfile", { profile })}
        />
      </View>
    </View>
  );
}
