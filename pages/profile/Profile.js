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
import tw from 'twrnc';
import SearchIcon from '../../node_modules/react-native-heroicons/solid/SearchIcon';
import UserIcon from '../../node_modules/react-native-heroicons/solid/UserIcon';
import ViewListIcon from '../../node_modules/react-native-heroicons/solid/ViewListIcon';
import ViewGridAddIcon from '../../node_modules/react-native-heroicons/solid/ViewGridAddIcon';
import {SearchBar} from 'react-native-screens';

const Profile = ({navigation, route}) => {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View
        style={tw`h-7/8 border-0 w-full rounded-b-3xl shadow-md px-3 pt-4 mb-4`}>
        <View
          style={tw`h-14 bg-red-500 shadow-sm rounded-3xl flex flex-row justify-center items-center`}>
          <Text style={tw`text-white text-2xl font-bold text-center`}>
            Cari Barang
          </Text>
        </View>
        <View>
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
          

          <View>
            <SearchBar
              placeholder="Type Here..."
              onChangeText={""}
              value={""}
            />
          </View>
        </View>
      </View>
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
    </SafeAreaView>
  );
};

export default Profile;
