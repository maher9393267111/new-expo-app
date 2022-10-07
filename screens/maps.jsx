import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Colors } from "react-native/Libraries/NewAppScreen";
//import IconButton from "../components/IconButton";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 59.3251706,
    longitude: 18.0705341,
    latitudeDelta: 0.0952,
    longitudeDelta: 0.0521,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
    console.log('Selected ---->' , selectedLocation )
  }


  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        ></Marker>
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: { flex: 1 },
});