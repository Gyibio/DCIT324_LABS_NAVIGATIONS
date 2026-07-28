import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import CoursesScreen from "../Screens/CoursesScreen";
import TimetableScreen from "../src/Screens/TimetableScreen";
import ProfileScreen from "../Screens/ProfileScreen";

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
