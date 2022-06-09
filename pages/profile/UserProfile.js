import React, {useState} from 'react';
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
import SearchIcon from 'react-native-heroicons/solid/SearchIcon';
import UserIcon from 'react-native-heroicons/solid/UserIcon';
import ViewGridAddIcon from 'react-native-heroicons/solid/ViewGridAddIcon';
import ViewListIcon from 'react-native-heroicons/solid/ViewListIcon';
import PhoneIcon from 'react-native-heroicons/solid/PhoneIcon';
import NewspaperIcon from 'react-native-heroicons/solid/NewspaperIcon';
import LibraryIcon from 'react-native-heroicons/solid/LibraryIcon';
import tw from 'twrnc';

const UserProfile = ({navigation, route}) => {
  const [tracking, setTracking] = React.useState('No tracking');
  const onHandleChange = e => {
    setTracking();
  };

  const userImage = require('../../assets/user_default.png');

  console.log('tracking', tracking);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : ''}>
      <SafeAreaView style={tw`h-full bg-white`}>
        {/* body */}
        <View
          style={tw`h-7/8 border-0 w-full rounded-b-3xl shadow-md  mb-4 flex  `}>
          <View
            style={tw` bg-red-500 rounded-b-3xl h-60 flex flex-col py-5 items-center shadow-lg`}>
            <View style={tw`flex flex-row justify-between w-98`}>
              <Text style={tw`text-2xl text-gray-700 font-bold mb-5`}>
                Welcome, <Text style={tw`text-white`}>Ikram</Text>
              </Text>
              <Text style={tw`text-2xl text-white font-bold mb-5`}>
                Logout
              </Text>
            </View>
            <View>
              <ImageBackground
                source={userImage}
                style={tw`w-20 h-20 mt-3 rounded-xl`}></ImageBackground>
            </View>
          </View>

          <View style={tw`m-auto w-60`}>
            <View style={tw`flex flex-row items-center py-4`}>
              <UserIcon style={tw`text-red-500 text-2xl mr-4`} />
              <Text>Muhammad Ikram bin Azhar</Text>
            </View>
            <View style={tw`flex flex-row items-center py-4 `}>
              <PhoneIcon style={tw`text-red-500 text-2xl mr-4`} />
              <Text>+60175845874</Text>
            </View>
            <View style={tw`flex flex-row items-center py-4 `}>
              <NewspaperIcon style={tw`text-red-500 text-2xl mr-4`} />
              <Text>Ikram yang terpaling hensem</Text>
            </View>
            <View style={tw`flex flex-row items-center py-4 `}>
              <LibraryIcon style={tw`text-red-500 text-2xl mr-4`} />
              <Text>No.11, Lorong ara indah 2/2, taman ara indah, 13500 permatang pauh, pulau pinang</Text>
            </View>
          </View>
        </View>

        {/* navigation bottom */}
        <View
          style={tw`w-full shadow flex flex-row h-17 justify-evenly items-center rounded-t-3xl bg-red-600`}>
          <TouchableOpacity
            style={tw`p-3`}
            onPress={() => navigation.navigate('Profile')}>
            <SearchIcon style={tw`text-white`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw` p-3`}>
            <ViewGridAddIcon style={tw`text-white`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw` p-3`}>
            <ViewListIcon style={tw`text-white`} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-white rounded-2xl px-8 py-3`}>
            <UserIcon style={tw`text-red-500 text-2xl`} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;
