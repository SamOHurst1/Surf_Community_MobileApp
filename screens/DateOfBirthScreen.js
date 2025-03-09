import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const DateOfBirthScreen = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const handleDayChange = (text) => {
    setDay(text);

    if (text.length == 2) {
      monthRef.current.focus();
    }
  }

  const handemonthChange = (text) => {
    setMonth(text);

    if (text.length == 2) {
      yearRef.current.focus();
    }
  }

  const handleYearChange = (text) => {
    setYear(text);
  }


  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("Location");
  }

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1, backgroundColor: "white"}}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
            <FontAwesome name="calendar" size={26} color="black"/>
          </View>
          <Image
            source={require('../assets/3tdots.png')}
            style={{ width: 100, height: 50, marginBottom: 20}}
          >
          </Image>
        </View>

        <Text style={{fontSize: 25, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginTop: 15}}>
          What's your date of birth?
        </Text>

        <View style={{flexDirection:"row", alignItems:"center", gap:"10", marginTop:80, justifyContent:"center"}}>
          <TextInput
            value={day}
            onChangeText={handleDayChange}
            autoFocus={true}
            keyboardType='numeric'
            placeholder='DD'
            placeholderTextColor={'#BEBEBE'}
            style={{borderBottomWidth: 1, borderColor:"black",padding: 10, width: 60, fontFamily: "GeezaPro-Bold", fontSize: day ? 22 : 22}}
            >
          </TextInput>
          
          <TextInput
            ref={monthRef}
            value={month}
            onChangeText={handemonthChange}
            autoFocus={true}
            keyboardType='numeric'
            maximumLength={2}
            placeholder='MM' 
            placeholderTextColor={'#BEBEBE'}
            style={{borderBottomWidth: 1, borderColor:"black",padding: 10, width: 60, fontFamily: "GeezaPro-Bold", fontSize: month ? 22 : 22}}
            >
          </TextInput>

          <TextInput
            ref={yearRef}
            value={year}
            onChangeText={handleYearChange}
            autoFocus={true}
            keyboardType='numeric'
            maximumLength={4}
            placeholder='YYYY'
            placeholderTextColor={'#BEBEBE'}
            style={{borderBottomWidth: 1, borderColor:"black",padding: 10, width: 80, fontFamily: "GeezaPro-Bold", fontSize: year ? 22 : 22}}
            >
          </TextInput>
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

export default DateOfBirthScreen;

const styles = StyleSheet.create({});
