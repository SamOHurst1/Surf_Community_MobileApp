import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
// import Entypo from '@react-native-vector-icons/entypo';
// import MaterialIcons from '@react-native-vector-icons/material-icons';
// import Ionicons from '@react-native-vecor-icons/ionicons';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

import Icons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../screens/LoginScreen';
import BasicInfo from '../screens/BasicInfo';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import OtpScreen from '../screens/OtpScreen';
import PasswordScreen from '../screens/PasswordScreen';
import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import SurfSkillLevelScreen from '../screens/SurfSkillLevelScreen';
import NationalityScreen from '../screens/NationalityScreen';
import BoardTypeScreen from '../screens/BoardTypeScreen';
import ConsistencyScreen from '../screens/ConsistencyScreen';
import FavoriteConditionsScreen from '../screens/FavoriteConditionsScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PreFinalScreen from '../screens/PreFinalScreen';
import BestWaveSurfedScreen from '../screens/BestWaveSurfedScreen';
import ProfessionScreen from '../screens/ProfessionScreen';
import ManeuversScreen from '../screens/ManeuversScreen';


// const StackNavigator = () => {
//     const Stack = createNativeStackNavigator();
//     const Tab = createBottomTabNavigator();

//     function BottomTabs() {
//         return (
//             <Tab.Navigator>
//                 <Tab.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     options={{
//                         tabBarStyle: {backgroundColor: '#101010'},
//                         headerShown: false,
//                         tabBarIcon: ({focused}) =>
//                             focused ? (
//                             <Ionicons name="shuffle-outline" size={30} colour="white"/>
//                         ) : (
//                             <Ionicons name="shuffle-outline" size={30} colour="gray"/>
//                         ),
//                     }}
//                 />
//             </Tab.Navigator>
//         );
//     }

//     return (
//         <View>
//             <Text>StackNavigator</Text>
//         </View>
//     );
// };

// export default StackNavigator;

// const styles = StyleSheet.create({});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const renderTabBarIconHome = (focused) => {
  return (
    <FontAwesome
      name="home"
      size={30}
      color={focused ? 'white' : 'gray'}
    />
  );
};

const renderTabBarIconChat = (focused) => {
    return (
        <FontAwesome
            name="comments"
            size={30}
            color={focused ? 'white' : '#989898'}
        />
    );
};

const renderTabBarIconProfile = (focused) => {
    return (
        <FontAwesome
            name="user"
            size={30}
            color={focused ? 'white' : '#989898'}
        />
    );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={() => ({
            tabBarShowLabel: false,
            tabBarStyle: { height: 90 },
        })}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarStyle: { backgroundColor: '#101010' },
            headerShown: false,
            tabBarIcon: ({ focused }) => renderTabBarIconHome(focused), // Pass function reference
        }}
        />

        <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
            tabBarStyle: { backgroundColor: '#101010' },
                headerShown: false,
                tabBarIcon: ({ focused }) => renderTabBarIconChat(focused), // Pass function reference
            }}
        />

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
            tabBarStyle: { backgroundColor: '#101010' },
                headerShown: false,
                tabBarIcon: ({ focused }) => renderTabBarIconProfile(focused), // Pass function reference
            }}
        />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
       {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/> */}
      <Stack.Screen name="Basic" component={BasicInfo} options={{headerShown: false}}/>
      <Stack.Screen name="Name" component={NameScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Email" component={EmailScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Otp" component={OtpScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Password" component={PasswordScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Birth" component={DateOfBirthScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Location" component={LocationScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Gender" component={GenderScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Nationality" component={NationalityScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Skill" component={SurfSkillLevelScreen} options={{headerShown: false}}/>
      <Stack.Screen name="BoardType" component={BoardTypeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Consistency" component={ConsistencyScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Conditions" component={FavoriteConditionsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="BestWave" component={BestWaveSurfedScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Profession" component={ProfessionScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Maneuvers" component={ManeuversScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Photo" component={PhotoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="PreFinal" component={PreFinalScreen} options={{headerShown: false}}/>

    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}}/>
     
      
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
   <NavigationContainer>
      <AuthStack/>
   </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

