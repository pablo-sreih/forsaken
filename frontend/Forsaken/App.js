import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler'

import LandingPage from "./assets/pages/LandingPage";
import TabNavigator from './assets/navigation/TabNavigator';
import LoginPage from './assets/pages/LoginPage';
import SignupPage from './assets/pages/SignupPage';


const Stack = createStackNavigator()


const Auth = () => {
  return(
    <Stack.Navigator initialRouteName='Landing' screenOptions={{animationEnabled: false}}>
      <Stack.Screen name='Landing' component={LandingPage} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Login' component={LoginPage} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Register' component={SignupPage} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Auth' component={Auth} options={{
        headerShown: false
      }}/>
      {/* <View style={styles.container}> */}
        {/* <FeedPage/> */}
        {/* <LoginPage/> */}
        {/* <ActivityPage/> */}
        {/* <ProfilePage/> */}
        {/* <MapPage/> */}
      {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
