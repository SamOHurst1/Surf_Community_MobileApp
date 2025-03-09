import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';


const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  const route = useRoute();
  const navigation = useNavigation();
  const email = route.params?.email;

  const handleNext = () => {
    navigation.navigate("Otp", {
      email
    });
  }

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1, backgroundColor: "white"}}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
            <FontAwesome name="lock" size={26} color="black"/>
          </View>
          <Image
            source={require('../assets/3tdots.png')}
            style={{ width: 100, height: 50, marginBottom: 20}}
          >
          </Image>
        </View>

        <Text style={{fontSize: 25, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginTop: 15}}>
          Please choose a password
        </Text>

        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          autoFocus={true} placeholder='Enter your password (required)' secureTextEntry={true} placeholderTextColor={'#BEBEBE'}
          style={{marginVertical: 10, marginTop: 25, width: 340, borderBottomColor: "black", borderBottomWidth: 1, paddingBottom: 10, fontFamily: "GeezaPro-Bold", fontSize: password ? 22 : 22}}
          >
        </TextInput>

        <Text style={{fontSize: 15, color: "gray", marginTop: 7}}>
          Note: Your details will be safe with us
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

export default PasswordScreen;

const styles = StyleSheet.create({});
