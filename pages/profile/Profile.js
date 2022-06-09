import React , { useState } from 'react';
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
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import tw from 'twrnc';
import {SearchBar} from 'react-native-screens';
import {NavigationBottom} from '../NavigationBottom';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Login from './../Login';
import SearchIcon from '../../node_modules/react-native-heroicons/solid/SearchIcon';
import UserIcon from '../../node_modules/react-native-heroicons/solid/UserIcon';
import ViewListIcon from '../../node_modules/react-native-heroicons/solid/ViewListIcon';
import ViewGridAddIcon from '../../node_modules/react-native-heroicons/solid/ViewGridAddIcon';


const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#0000ff',
    height: 100,
  },
  tabBarItemStyle: {
    backgroundColor: '#00ff00',
    margin: 5,
    borderRadius: 10,
  },
};

const Profile = ({navigation, route}) => {

  const [tracking, setTracking] = React.useState("No tracking");
  const onHandleChange = (e) => { 
    setTracking(
      
    );
  };

  console.log("tracking", tracking);



  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : ''}>
      <SafeAreaView style={tw`h-full bg-white`}>

        {/* body */}
        <View
          style={tw`h-7/8 border-0 w-full rounded-b-3xl shadow-md px-3 pt-4 mb-4`}>
          <ScrollView>
            <Text style={tw`text-4xl font-bold text-red-600 mt-4 mb-2 mx-2`}>
              Hantar App
            </Text>
            <Text style={tw`italic mx-2 text-lg`}>
              In publishing and graphic design,kambing anak ayam
            </Text>
            <Text style={tw`text-4xl font-bold text-red-600 mt-4 mb-2 mx-2`}>
              Hantar App
            </Text>
            <Text style={tw`italic mx-2 text-lg`}>
              In publishing and graphic design,kambing anak ayam
            </Text>
            <Text style={tw`text-4xl font-bold text-red-600 mt-4 mb-2 mx-2`}>
              Hantar App
            </Text>
            <Text style={tw`italic mx-2 text-lg`}>
              In publishing and graphic design,kambing anak ayam
            </Text>
            <Text style={tw`text-4xl font-bold text-red-600 mt-4 mb-2 mx-2`}>
              Hantar App
            </Text>
            <Text style={tw`italic mx-2 text-lg`}>
              In publishing and graphic design,kambing anak ayam
            </Text>
          </ScrollView>
          <TextInput
            style={tw`border-2 rounded-xl border-gray-300 px-4 text-lg text-center mb-3`}
            placeholder="No tracking"
            onChangeText={setTracking}
            value={tracking.tracking}></TextInput>
        </View>

        {/* navigation bottom */}
        <View
          style={tw`w-full shadow flex flex-row h-17 justify-evenly items-center rounded-t-3xl bg-red-600`}>
          <TouchableOpacity style={tw`bg-white rounded-2xl px-8 py-3`}>
            <SearchIcon style={tw`text-red-500 text-2xl`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw` p-3`}>
            <ViewGridAddIcon style={tw`text-white`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw` p-3`}>
            <ViewListIcon style={tw`text-white`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw` p-3`} onPress={() => navigation.navigate('UserProfile')}>
            <UserIcon style={tw`text-white `} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
