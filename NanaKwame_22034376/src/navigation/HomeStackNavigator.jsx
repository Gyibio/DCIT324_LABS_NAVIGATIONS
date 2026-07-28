import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../Screens/FeedScreen";
import EventDetailsScreen from "../Screens/EventDetailsScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ title: "Campus Feed" }}
      />
      <HomeStack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: "Event Details" }}
      />
    </HomeStack.Navigator>
  );
}
