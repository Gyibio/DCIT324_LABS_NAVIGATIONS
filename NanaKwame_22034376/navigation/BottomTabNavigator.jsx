import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tab-navigator';
import HomeStackNavigator from './HomeStackNavigator';
import CoursesScreen from '../screens/CoursesScreen';
import TimetableScreen from '../screens/TimetableScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ profile }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Timetable" component={TimetableScreen} />
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} profile={profile} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}