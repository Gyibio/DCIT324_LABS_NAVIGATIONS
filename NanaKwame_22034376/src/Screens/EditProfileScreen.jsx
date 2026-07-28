import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/commonStyles";

export default function EditProfileScreen({
  route,
  navigation,
  onSaveProfile,
}) {
  const { profile } = route.params;
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [programme, setProgramme] = useState(profile.programme);

  const handleSave = () => {
    onSaveProfile({ ...profile, name, bio, programme });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Programme:</Text>
      <TextInput
        style={styles.input}
        value={programme}
        onChangeText={setProgramme}
      />

      <Text style={styles.label}>Bio:</Text>
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
