import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, Pressable } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
const GenderScreen = () => {
  const [gender, setGender] = useState("");

  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("Nationality");
  }

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1, backgroundColor: "white"}}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
            <FontAwesome name="venus-mars" size={26} color="black"/>
          </View>
          <Image
            source={require('../assets/3tdots.png')}
            style={{ width: 100, height: 50, marginBottom: 20}}
          >
          </Image>
        </View>

        <Text style={{fontSize: 25, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginTop: 15}}>
         Which gender describes you the best?
        </Text>
        
        <View style={{marginTop: 30}}>
         <View style={{flexDirection: "row", alignItems:"center", justifyContent:"space-between" }}>
          <Text style={{fontSize: 15, fontWeight: "500"}}>Man</Text>
          <Pressable onPress={() => setGender("Man")}>
            <FontAwesome name="circle" size={26} color={gender == "Man"? "#581845" : "#f0f0f0"}></FontAwesome>
          </Pressable>
         </View>

         <View style={{flexDirection: "row", alignItems:"center", justifyContent:"space-between", marginVertical: 12 }}>
          <Text style={{fontSize: 15, fontWeight: "500"}}>Woman</Text>
          <Pressable onPress={() => setGender("Woman")}>
            <FontAwesome name="circle" size={26} color={gender == "Woman"? "#581845" : "#f0f0f0"}></FontAwesome>
          </Pressable>
         </View>

         <View style={{flexDirection: "row", alignItems:"center", justifyContent:"space-between" }}>
          <Text style={{fontSize: 15, fontWeight: "500"}}>Other</Text>
          <Pressable onPress={() => setGender("Other")}>
            <FontAwesome name="circle" size={26} color={gender == "Other"? "#581845" : "#f0f0f0"}></FontAwesome>
          </Pressable>
         </View>

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

export default GenderScreen;

const styles = StyleSheet.create({});
