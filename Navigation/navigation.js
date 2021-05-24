import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserForm from './../Components/userForm'
import HomeScreen from './../Components/home'
import ProfileScreen from "./../Components/profile"
import SettingsScreen from "./../Components/setting"
import HeaderLeft from "./header"



const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SingupStack = createStackNavigator();
const SettingStack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen({ navigation }) {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerLeft:()=><View><Text>hello</Text></View>,
      headerTitleStyle: "bold"
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          headerLeft: () => {
            <Icon name="home" size={40} onPress={navigation.openDrawer()} />
          }
        }} />

    </HomeStack.Navigator>
  );
}

function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerLeft:<HeaderLeft/>,
      headerTitleStyle: "bold"
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />

    </ProfileStack.Navigator>
  );
}
function SingupStackScreen({ navigation }) {
  return (
    <SingupStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerLeft:<HeaderLeft/>,
      headerTitleStyle: "bold"
    }}>
      <SingupStack.Screen name="Signup" component={UserForm} />

    </SingupStack.Navigator>
  );
}

function SettingStackScreen({ navigation }) {
  return (
    <SettingStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#009387"
      },
      headerTintColor: "#fff",
      headerLeft:<HeaderLeft/>,
      headerTitleStyle: "bold"
    }}>
      <SettingStack.Screen name="Setting" component={SettingsScreen} />

    </SettingStack.Navigator>
  );
}



export const Navigation = () => {
  return (
    // <Stack.Navigator>
    // <Stack.Screen name="Home" component={HomeScreen} />
    // <Stack.Screen name="Signup" component={UserForm} />
    // <Stack.Screen name="Profile" component={ProfileScreen} />
    // </Stack.Navigator>
    // <Tab.Navigator
    // screenOptions={({ route }) => ({
    // tabBarIcon: ({ focused, color, size }) => {
    // let iconName;

    // if (route.name === 'Home') {
    // iconName = focused
    // ? 'home'
    // : 'home';
    // } else if (route.name === 'Settings') {
    // iconName = focused ? 'cog' : 'cog';
    // }
    // else if (route.name === 'Profile') {
    // iconName = focused ? 'users' : 'users';
    // }
    // else if (route.name === 'Signup') {
    // iconName = focused ? 'user-plus' : 'user-plus';
    // }


    // return <Icon name={iconName} size={size} color={color} />;
    // },
    // })}
    // tabBarOptions={{
    // activeTintColor: 'tomato',
    // inactiveTintColor: 'gray',
    // }}>
    // <Tab.Screen name="Home" component={HomeScreen} />
    // <Tab.Screen name="Settings" component={SettingsScreen} />
    // <Tab.Screen name="Signup" component={UserForm} />
    // <Tab.Screen name="Profile" component={ProfileScreen} />
    // </Tab.Navigator>


    // <Stack.Navigator>
    // <Stack.Screen name="Home" component={HomeScreen} />
    // <Stack.Screen name="Signup" component={UserForm} />
    // <Stack.Screen name="Profile" component={ProfileScreen} />
    // </Stack.Navigator>

    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Signup" component={SingupStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Setting" component={SettingStackScreen} />
    </Drawer.Navigator>




  )
}