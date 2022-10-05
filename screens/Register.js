
// import { useNavigation } from "@react-navigation/native";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import React, { useState, useEffect } from "react";
// import {
//   KeyboardAvoidingView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
// import { auth } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import { GoogleAuthProvider } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const provider = new GoogleAuthProvider();

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigation = useNavigation();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const emaill = await AsyncStorage.getItem("Email");
//         const pass = await AsyncStorage.getItem("Password");
//         if (emaill !== null && pass !== null) {
//           // value previously stored
//           const handleSignIn = async () => {
//             signInWithEmailAndPassword(auth, emaill, pass)
//               .then(async (userCredential) => {
//                 console.log("signed in");
//                 const user = userCredential.user;
//                 console.log(user);
//                 await addDoc(collection(db, "users"), {
//                   email: email,
//                 })
//                   .then(() => console.log("this is the email"))
//                   .catch(() => {
//                     console.log("rejected");
//                   });
        
//             //    navigation.navigate("FMB");
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           };
//           handleSignIn()
//         }else{
//           console.log("no data")
//         }
//       } catch (e) {
//         // error reading value
//       }
//     };


//     return () => {
//       getData()
//     };
//   }, []);

//   const handleCreateAccount = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log("account created");
//         const user = userCredential.user;
//         console.log(user);
//         storeData(email, password);
//         navigation.navigate("FMB");
//       })
//       .catch((error) => {
//         console.log(error);
//         Alert.alert(error.message);
//       });
//   };

//   const handleSignIn = async () => {
//     signInWithEmailAndPassword(auth, emaill, pass)
//       .then(async (userCredential) => {
//         console.log("signed in");
//         const user = userCredential.user;
//         console.log(user);
//         await addDoc(collection(db, "users"), {
//           email: email,
//         })
//           .then(() => console.log("this is the email"))
//           .catch(() => {
//             console.log("rejected");
//           });

//         navigation.navigate("FMB");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   //SAVE THE EMAIL AND PASSWORD IN ASYNCSTORAGE

//   const storeData = async (email, password) => {
//     try {
//       await AsyncStorage.setItem("Email", email);
//       await AsyncStorage.setItem("Password", password);
//       console.log(email + password);
//     } catch (e) {
//       // saving error
//       console.log(e);
//     }
//   };

  

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//           style={styles.input}
//           secureTextEntry
//         />
//         <Text></Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={handleCreateAccount}
//           style={[styles.button, styles.buttonOutline]}
//         >
//           <Text style={styles.buttonOutlineText}>Register</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleSignIn} style={styles.button}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     top: 20,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   inputContainer: {
//     width: "80%",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   buttonContainer: {
//     width: "60%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: "orange",
//     width: "100%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonOutline: {
//     backgroundColor: "white",
//     marginTop: 5,
//     borderColor: "black",
//     borderWidth: 2,
//   },
//   buttonOutlineText: {},
// });







import { Cont , TextStyle  } from './styles';

import { View, Text } from 'react-native'
import React from 'react'

export default function Register() {
  return (
    <View>
      <Text className=" mt-2 bg-green-300  ml-2">Register Page</Text>
    </View>
  )
}
