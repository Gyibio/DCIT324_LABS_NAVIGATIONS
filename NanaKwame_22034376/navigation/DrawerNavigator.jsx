import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import AnnouncementsScreen from '../screens/AnnouncementsScreen';
import AboutScreen from '../screens/AboutScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';

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