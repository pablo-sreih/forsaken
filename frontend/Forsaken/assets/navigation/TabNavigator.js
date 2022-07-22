import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

// Screens
import ActivityPage from "../pages/ActivityPage";
import ProfilePage from "../pages/ProfilePage";
import MapPage from "../pages/MapPage";
import FeedPage from "../pages/FeedPage";
import CameraPage from "../pages/CameraPage";

const Tab = createBottomTabNavigator()

export default function TabNavigator(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 15,
                left: 15,
                right: 15,
                elevation: 5,
                borderRadius: 15,
                height: 50
            }
        }}>
            <Tab.Screen name="Feed" component={FeedPage} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name='home' color={focused ? 'red' : 'black'}/>
                )
            }}/>
            <Tab.Screen name="Activity" component={ActivityPage} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name='track-changes' color={focused ? 'red' : 'black'}/>
                )
            }}/>
            <Tab.Screen name="Camera" component={CameraPage} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name='camera' color={focused ? 'red' : 'black'}/>
                )
            }}/>
            <Tab.Screen name="Map" component={MapPage} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name='explore' color={focused ? 'red' : 'black'}/>
                )
            }}/>
            <Tab.Screen name="Profile" component={ProfilePage} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name='account-circle' color={focused ? 'red' : 'black'}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

