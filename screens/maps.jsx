
import { View ,Text } from "native-base";

import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
//import { mapStyle } from "../theming/mapStyle";
import { StyleSheet } from "react-native";

import * as Location from "expo-location";
import { useContext, useRef, useState, useEffect } from "react";


export default function DENEME() {


    const [location, setLocation] = useState();
    const map = useRef();
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
          enableHighAccuracy: true,
          timeInterval: 5,
        });
        setLocation(location.coords);
        console.log('LOCATION--->' , location)
      })();
    }, []);
  



  return (
    <View>
      <Text>DENEME</Text>
    </View>
  )
}