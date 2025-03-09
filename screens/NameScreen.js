import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const NameScreen = () => {
  const [firstName, setFirstName] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Email");
  }
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1}}>

      <View style={{marginTop: 30, marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
            <FontAwesome name="book" size={26} color="black"/>
          </View>
          <Image
            source={require('../assets/3tdots.png')}
            style={{ width: 100, height: 50, marginBottom: 20}}
          >
          </Image>
          
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 25, fontWeight: "bold", fontFamily: "GeezaPro-Bold"}}>What's your name?</Text>
          <TextInput
          value={firstName}
          onChangeText={text => setFirstName(text)}
          autoFocus={true} placeholder='First Name (required)' placeholderTextColor={'#BEBEBE'}
          style={{marginVertical: 10, marginTop: 25, width: 340, borderBottomColor: "black", borderBottomWidth: 1, paddingBottom: 10, fontFamily: "GeezaPro-Bold", fontSize: firstName ? 22 : 22}}
          >
          </TextInput>
          <TextInput
          placeholder='Last Name' placeholderTextColor={'#BEBEBE'}
          style={{marginVertical: 10, marginTop: 25, width: 340, borderBottomColor: "black", borderBottomWidth: 1, paddingBottom: 10, fontFamily: "GeezaPro-Bold", fontSize: firstName ? 22 : 22}}
          >
          </TextInput>
          <Text style={{fontSize: 15, color: "gray", fontWeight: 500}}>Last Name is optional</Text>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: "auto"}}
        >
        <FontAwesome name="chevron-right" size={45} color="black"/>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
