import React from "react";
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
    KeyboardAvoidingView
  } from 'react-native';
  import tw from 'twrnc';
  import SearchIcon from '../node_modules/react-native-heroicons/solid/SearchIcon';
  import UserIcon from '../node_modules/react-native-heroicons/solid/UserIcon';
  import ViewListIcon from '../node_modules/react-native-heroicons/solid/ViewListIcon';
  import ViewGridAddIcon from '../node_modules/react-native-heroicons/solid/ViewGridAddIcon';
  import {SearchBar} from 'react-native-screens';

const NavigationBottom = ({navigation, route}) => {
  return (
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
      <TouchableOpacity style={tw` p-3`}>
        <UserIcon style={tw`text-white `} />
      </TouchableOpacity>
    </View>
    
  );
};

export default NavigationBottom;
