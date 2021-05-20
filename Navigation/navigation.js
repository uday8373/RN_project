import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserForm from './../Components/userForm'
import HomeScreen from './../Components/home'
import ProfileScreen from './../Components/profile'


const Stack = createStackNavigator();

export const Navigation = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={UserForm} />
        <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}