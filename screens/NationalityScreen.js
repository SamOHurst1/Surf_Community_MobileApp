import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, Pressable } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from 'react-native-dropdown-picker';

const NationalityScreen = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [selectedNationality, setSelectedNationality] = useState(null);


  const handleNext = () => {
    navigation.navigate("Nationality");
  }

  const [items, setItems] = useState([
    { label: "Albanian", value: "Albanian" },
    { label: "American", value: "American" },
    { label: "Argentine", value: "Argentine" },
    { label: "Australian", value: "Australian" },
    { label: "Austrian", value: "Austrian" },
    { label: "Belgian", value: "Belgian" },
    { label: "Brazilian", value: "Brazilian" },
    { label: "British", value: "British" },
    { label: "Bulgarian", value: "Bulgarian" },
    { label: "Canadian", value: "Canadian" },
    { label: "Croatian", value: "Croatian" },
    { label: "Cypriot", value: "Cypriot" },
    { label: "Czech", value: "Czech" },
    { label: "Danish", value: "Danish" },
    { label: "Dutch", value: "Dutch" },
    { label: "Egyptian", value: "Egyptian" },
    { label: "Estonian", value: "Estonian" },
    { label: "Finnish", value: "Finnish" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
    { label: "Greek", value: "Greek" },
    { label: "Hungarian", value: "Hungarian" },
    { label: "Icelander", value: "Icelander" },
    { label: "Indian", value: "Indian" },
    { label: "Irish", value: "Irish" },
    { label: "Israeli", value: "Israeli" },
    { label: "Italian", value: "Italian" },
    { label: "Japanese", value: "Japanese" },
    { label: "Kosovan", value: "Kosovan" },
    { label: "Latvian", value: "Latvian" },
    { label: "Lithuanian", value: "Lithuanian" },
    { label: "Luxembourgish", value: "Luxembourgish" },
    { label: "Maltese", value: "Maltese" },
    { label: "Mexican", value: "Mexican" },
    { label: "Monegasque", value: "Monegasque" },
    { label: "Montenegrin", value: "Montenegrin" },
    { label: "Norwegian", value: "Norwegian" },
    { label: "Polish", value: "Polish" },
    { label: "Portuguese", value: "Portuguese" },
    { label: "Romanian", value: "Romanian" },
    { label: "Russian", value: "Russian" },
    { label: "Serbian", value: "Serbian" },
    { label: "Slovak", value: "Slovak" },
    { label: "Slovenian", value: "Slovenian" },
    { label: "Spanish", value: "Spanish" },
    { label: "Swedish", value: "Swedish" },
    { label: "Swiss", value: "Swiss" },
    { label: "Turkish", value: "Turkish" },
    { label: "Ukrainian", value: "Ukrainian" }
  ]);

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1, backgroundColor: "white"}}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
            <FontAwesome name="flag" size={26} color="black"/>
          </View>
          <Image
            source={require('../assets/3tdots.png')}
            style={{ width: 100, height: 50, marginBottom: 20}}
          >
          </Image>
        </View>

        <Text style={{fontSize: 25, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginTop: 15}}>
         Where are you from?
        </Text>
        
        <View style={{ marginTop: 20, zIndex: 1000 }}>
          <DropDownPicker
            open={open}
            value={selectedNationality}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedNationality}
            setItems={setItems}
            placeholder="Select your nationality"
            searchable={true}  // Enables search functionality
            searchPlaceholder="Search nationalities..."
            containerStyle={{ height: 50 }}
            style={{ backgroundColor: "#f0f0f0" }}
            dropDownContainerStyle={{ backgroundColor: "#fff" }}
          />
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

export default NationalityScreen;

const styles = StyleSheet.create({});
