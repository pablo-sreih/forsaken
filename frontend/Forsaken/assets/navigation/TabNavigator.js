import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";

// Screens
import ActivityPage from "../pages/ActivityPage";
import ProfilePage from "../pages/ProfilePage";
import MapPage from "../pages/MapPage";
import FeedPage from "../pages/FeedPage";
import LocationPage from "../pages/LocationPage";
import MapPageByLocation from "../pages/MapPageByLocation";
import AddReview from "../pages/AddReview";
import AddPost from "../pages/AddPost";
import EditProfile from "../pages/EditProfile";
import LandingPage from "../pages/LandingPage";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={FeedPage} />
      <Stack.Screen name="Location" component={LocationPage} />
      <Stack.Screen name="MapByLocation" component={MapPageByLocation} />
      <Stack.Screen name="Review" component={AddReview} />
      <Stack.Screen name="AddPost" component={AddPost} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 15,
          right: 15,
          elevation: 5,
          borderRadius: 15,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="FeedPage"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" color={focused ? "red" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="track-changes" color={focused ? "red" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="add-circle"
              size={35}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="explore" color={focused ? "red" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="account-circle" color={focused ? "red" : "black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
