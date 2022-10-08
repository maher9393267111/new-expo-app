// import React, { useState } from 'react';
// import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default function Selectfotoavatar() {
//   const [image, setImage] = useState(
//     require('')
//   );

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage({ uri: result.uri });
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {image && <Image style={styles.cirulo} source={image} />}
//       <TouchableOpacity style={styles.camera} onPress={pickImage}>
//         <Icon
//           name="camera"
//           color={'#EDF5F2'}
//           size={25}
//           style={styles.center}
//         ></Icon>
//       </TouchableOpacity>
//     </View>
//   );
// }
// 

import React, { useState } from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Maps() {

    const [image, setImage] = useState(
            ''
           );


           const pickImage = async () => {
                // No permissions request is necessary for launching the image library
                let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });
            
                console.log(result);
            
                if (!result.cancelled) {
                  setImage({ uri: result.uri });
                }
              };
            




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {image ?  <Image style={styles.cirulo} source={image} /> : null }
     <TouchableOpacity style={styles.camera} onPress={pickImage}>
            <Icon
              name="camera"
              color={'#EDF5F2'}
          size={25}
              style={styles.center}
            ></Icon>
           </TouchableOpacity>
        </View> 
  )
}


const styles = StyleSheet.create({
      camera: {
        marginTop: -50,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#40B880',
        alignSelf: 'flex-end',
      },
      
      center: {
        alignSelf: 'center',
        top: 13,
      },
      cirulo: {
        marginTop: -220,
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
      },
    });