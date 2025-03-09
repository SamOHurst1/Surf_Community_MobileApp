import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navigation = () => {

}

const BasicInfo = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1}}>
      <View style={{marginTop: 80}}>
        <Text style={{fontSize: 32, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginLeft: 20}}>
          Meet your people
        </Text>
        <Text style={{fontSize: 32, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginLeft: 20, marginTop: 10}}>
          Time to create your profile.
        </Text>
      </View>

      <View>
        <LottieView
        style={{height: 260, width: 300, alignSelf: "center", marginTop: 50, justifyContent: "center"}}
        source={require("../assets/paddling.json")}
        autoPlay
        loop={true}
        speed={0.7}
        />
      </View>

      <Pressable
        style={{marginTop:"auto", backgroundColor: "#37b8f4", padding: 15}}
        onPress={() => navigation.navigate("Name")}
      >
        <Text style={{textAlign:"center", fontWeight: "600", fontSize: 16}}>Enter Basic Info</Text>
      </Pressable>
      
    </SafeAreaView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({});
