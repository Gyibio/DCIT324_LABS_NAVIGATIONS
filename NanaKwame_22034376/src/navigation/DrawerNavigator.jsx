import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import AnnouncementsScreen from "../Screens/AnnouncementsScreen";
import AboutScreen from "../Screens/AboutScreen";
import HelpSupportScreen from "../Screens/HelpSupportScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ profile }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard">
        {() => <BottomTabNavigator profile={profile} />}
      </Drawer.Screen>
      <Drawer.Screen name="Announcements" component={AnnouncementsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Help & Support" component={HelpSupportScreen} />
    </Drawer.Navigator>
  );
}
