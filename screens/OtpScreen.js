import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform  } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const route = useRoute();
  const navigation = useNavigation();
  const email = route.params?.email;

  const handleConfirmSignUp = () => {
    console.log('working');
  }

  useEffect(() => {
    if(otp.every(digit => digit !== '')) {
      handleConfirmSignUp();

      navigation.navigate("Birth");
    }
  }, [otp]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  }
  const handleBackspace = (text, index) => {
    if (!text && index > 0) { 
      inputs.current[index - 1].focus();
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  console.log('otp:', otp);


  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1, backgroundColor: "white", alignItems: "center"}}>
      <View style={{height: 60, justifyContent: 'center', alignItems:"center", marginTop: 50}}>
       <Text style={{fontSize: 18, fontWeight:'500' }}>Verification code</Text>
       <Text style={{fontSize: 14, color:'gray', marginTop: 5}}>Enter the 6 digit code sent to your email</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop:'30'}}>
        {otp?.map((_, index) => (
          <TextInput 
            key={index}
            style={{width: 45, height: 45, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, textAlign: 'center', fontSize: 18, color: '#333'}}
            ref={el => (inputs.current[index] = el)} 
            keyboardType='number-pad'
            maxLength={1}
            value={otp[index]}
            onChangeText={text => {handleChange(text, index)}}
            onKeyPress={({nativeEvent: {key}}) => {
              if (key == 'Backspace') {
                hanleBackspace('',index);
              }
            }}
            autoFocus={index === 0}
          />
        ))}
      </View>
    </SafeAreaView>
    
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
