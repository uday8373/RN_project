import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserForm from './../Components/userForm'
import HomeScreen from './../Components/home'
import ProfileScreen from './../Components/profile'
import SettingScreen from './../Components/settings'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { NavigationContainer } from '@react-navigation/native';


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigation = () => {

  return(
    // <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Signup" component={UserForm} />
    //     <Stack.Screen name="profile" component={ProfileScreen} />
    // </Stack.Navigator>
 
      
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } 
            else if (route.name === 'SignUp') {
              iconName = focused ? 'user-plus' : 'user-plus';
            }
            else if (route.name === 'profile') {
              iconName = focused ? 'user-circle' : 'user-circle';
            }
            else if (route.name === 'settings') {
              iconName = focused ? 'cog' : 'cog';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="SignUp" component={UserForm} />
        <Tab.Screen name="profile" component={ProfileScreen} />
        <Tab.Screen name="settings" component={SettingScreen} />
      </Tab.Navigator>

  )
}