import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ActivityPage from "../pages/ActivityPage";
import ProfilePage from "../pages/ProfilePage";
import MapPage from "../pages/MapPage";

const Tab = createBottomTabNavigator()

export default function TabNavigator(){
    return(
        <Tab.Navigator
        screenOptions={{headerShown: false}}>
            <Tab.Screen name="Activity" component={ActivityPage}/>
            <Tab.Screen name="Profile" component={ProfilePage}/>
            <Tab.Screen name="Map" component={MapPage}/>
        </Tab.Navigator>
    )
}