import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const EmailScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Password", {
      email: email
    });
  }

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1, backgroundColor: "white"}}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
            <FontAwesome name="envelope" size={26} color="black"/>
          </View>
          <Image
            source={require('../assets/3tdots.png')}
            style={{ width: 100, height: 50, marginBottom: 20}}
          >
          </Image>
        </View>

        <Text style={{fontSize: 25, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginTop: 15}}>
          Provide your email
        </Text>

        <Text style={{fontSize: 15, marginTop: 10, color: "grey"}}>
          Email Verification helps us keep the account secure
        </Text>

        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          autoFocus={true} placeholder='Enter your email (required)' placeholderTextColor={'#BEBEBE'}
          style={{marginVertical: 10, marginTop: 25, width: 340, borderBottomColor: "black", borderBottomWidth: 1, paddingBottom: 10, fontFamily: "GeezaPro-Bold", fontSize: email ? 22 : 22}}
          >
        </TextInput>

        <Text style={{fontSize: 15, color: "gray", marginTop: 7}}>
          Note: We'll email you a verification code
        </Text>

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

export default EmailScreen;

const styles = StyleSheet.create({});
