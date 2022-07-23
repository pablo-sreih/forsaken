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
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginPage}/>
      <Stack.Screen name='Register' component={SignupPage}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Auth' component={Auth}/>
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
