import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import { INITIAL_PROFILE } from './src/data/data';

export default function App() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);

  return (
    <NavigationContainer>
      <RootStackNavigator profile={profile} setProfile={setProfile} />
    </NavigationContainer>
  );
}