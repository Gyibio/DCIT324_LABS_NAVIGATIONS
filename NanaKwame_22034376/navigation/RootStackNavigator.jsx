import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator({ profile, setProfile }) {
  return (
    <RootStack.Navigator>
      <RootStack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />
      <RootStack.Screen 
        name="Main" 
        options={{ headerShown: false }}
      >
        {() => <DrawerNavigator profile={profile} />}
      </RootStack.Screen>
      <RootStack.Screen name="EditProfile" options={{ title: 'Edit Profile' }}>
        {(props) => <EditProfileScreen {...props} onSaveProfile={setProfile} />}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
}