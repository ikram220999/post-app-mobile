/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
const staticImage = require('./assets/pic.jpg');

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`h-6/7 border-0 w-full rounded-b-3xl px-3 pt-4`}>
        <View style={[tw``]}>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-4xl font-bold text-red-600 mt-4 mb-2 mx-2`}>
              Hantar App
            </Text>
            <Text style={tw`italic mx-2 text-lg`}>
              In publishing and graphic design,kambing anak ayam
            </Text>
            <ImageBackground
              source={staticImage}
              style={tw`w-full h-80 m-auto mt-3 rounded-xl `}></ImageBackground>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={tw` m-auto w-11/12 mb-3 bg-red-500 py-4.5 rounded-xl text-center flex justify-center items-center`}>
        <Text style={tw`m-auto text-2xl text-white font-bold`}>Log Masuk</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
