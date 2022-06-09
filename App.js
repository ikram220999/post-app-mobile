/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import tw from 'twrnc';

import Login from './pages/Login';
import Profile from './pages/profile/Profile';
import UserProfile from './pages/profile/UserProfile';

const Stack = createNativeStackNavigator();



const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator 
         screenOptions={{
          headerShown: false
        }}
        >
          
            <Stack.Screen 
              name='Home' component={Login}
            />
            <Stack.Screen
            name='Profile' component={Profile}
            />
            <Stack.Screen
            name='UserProfile' component={UserProfile}
            />

          

            
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
