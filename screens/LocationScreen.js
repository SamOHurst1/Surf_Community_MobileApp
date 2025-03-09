import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const LocationScreen = () => {

  const beaches = [
    { id: 1, name: "Costa Caparica", latitude: 38.641781, longitude: -9.239055 },
    { id: 2, name: "Carcavelos", latitude: 38.679377, longitude: -9.335394 },
  ];

  const midLatitude = (beaches[0].latitude + beaches[1].latitude) / 2;
  const midLongitude = (beaches[0].longitude + beaches[1].longitude) / 2;
  const navigation = useNavigation();

  
  const [selectedBeach, setSelectedBeach] = useState(null);
  
  const handleSelectBeach = (beach) => {
    setSelectedBeach(beach);
    console.log('Selected beach:', beach);
  };

  const [region, setRegion] = useState("");
  const [location, setLocation] = useState('Loading...');

  console.log('Region:', region);

  useEffect(() => {
    console.log('Fetching location...');
    Geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;

      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);

      const initialRegion = {
        // latitude,
        // longitude,
        latitude: midLatitude,
        longitude: midLongitude,
        latitudeDelta: 0.4,
        longitudeDelta: 0.05
      };

      setRegion(initialRegion);

      fetchAddress(latitude, longitude);
    }, 
    error => console.log('Error fetching location:', error),
    {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const fetchAddress = (latitude, longitude) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDAervm7xh1RQ3kctB4YXT3HySBegKYQgo`,
    ).then(response => response.json()).then(data => {
      if (data.results.length > 0) {
        const addressComponents = data?.results[0].address_components;
        let formattedAddress = '';

        for (let component of addressComponents) {
          if (component.types.includes('sublocality_level_1')) {
            formattedAddress += component.long_name + ', ';
          }

          if (component.types.includes('locality')) {
            formattedAddress += component.long_name + ', ';
          }
        }

        formattedAddress = formattedAddress.trim().slice(0, -1);
        setLocation(formattedAddress);
      }
    })
    .catch(error => console.log('Error fetching address:', error));
  };


  const handleNext = () => {
    navigation.navigate("Gender");
  }

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, flex: 1, backgroundColor: "white"}}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <View style={{width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center"}}>
            <FontAwesome name="map-pin" size={26} color="black"/>
          </View>
          <Image
            source={require('../assets/3tdots.png')}
            style={{ width: 100, height: 50, marginBottom: 20}}
          >
          </Image>
        </View>

        <Text style={{fontSize: 25, fontWeight: "bold", fontFamily: "GeezaPro-Bold", marginTop: 15}}>
          Where do you mainly surf?
        </Text>

        {/* {region && (
          <MapView region={region} style={{width:'100%', height:500, marginTop:20, borderRadius: 5}}>
            {region && (

              console.log('Region here:', region.latitude),
              <Marker coordinate={{latitude: region.latitude, longitude: region.longitude}}>
                <View style={{backgroundColor: "black", padding: 12, borderRadius: 30}}>
                  <Text style={{textAlign:"center", fontSize: 14, fontWeight:"500", color: "white"}}>
                    {location}
                  </Text>
                </View>
              </Marker>
            )}
          </MapView>
        )} */}

        {region && (
          <MapView region={region} style={{ width: "100%", height: 450, marginTop: 20, borderRadius: 5 }}>
            {beaches.map((beach) => (
              <Marker
                key={beach.id}
                coordinate={{ latitude: beach.latitude, longitude: beach.longitude }}
                onPress={() => handleSelectBeach(beach)}
                style={{  }}
              >
                <View 
                  style={{ 
                    backgroundColor: selectedBeach?.id === beach.id ?  "green" : "rgba(0, 0, 0, 0.4)",
                    padding: 12, 
                    borderRadius: 30,
                    minWidth: 100,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "500", color: "white" }}>
                    {beach.name}
                  </Text>
                </View>
              </Marker>
            ))}
          </MapView>
        )} 

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

export default LocationScreen;

const styles = StyleSheet.create({});
