import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";
//import { TextInput } from "react-native-gesture-handler";
import { auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const provider = new GoogleAuthProvider();

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigation = useNavigation();



  const handleCreateAccount = () => {
    console.log('CLICKEEED---?')
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("account created");
        const user = userCredential.user;
        console.log(user);
        storeData(email, password);
      //  navigation.navigate("FMB");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignIn = async () => {
    console.log('CLICKEEED---?')
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("signed in");
        const user = userCredential.user;
        console.log(user);
        await addDoc(collection(db, "users"), {
          email: email,
        })
          .then(() => console.log("this is the email"))
          .catch(() => {
            console.log("rejected---------");
          });

      //  navigation.navigate("FMB");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //SAVE THE EMAIL AND PASSWORD IN ASYNCSTORAGE

  const storeData = async (email, password) => {
    try {
      await AsyncStorage.setItem("Email", email);
      await AsyncStorage.setItem("Password", password);
      console.log(email + password);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };





  return (
    <View className=" mt-24 " >





<TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
         className='  border-none   '
        />

<TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        className=' pl-4 pr-4 mt-4 bg-white rounded-lg'
          secureTextEntry
        />

<View  className='  '>
        <TouchableOpacity
        className='    '
          onPress={handleCreateAccount}
         
        >
          <Text 
          className=' text-center mb-4  w-1/2 mx-auto   bg-red-400 text-white text-2xl font-bold rounded-lg'
          
          >Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignIn} 
        
        >
          <Text
          
          className=' text-center bg-blue-400 text-white text-2xl font-bold mb-4  w-1/2 mx-auto  rounded-lg'
          >Login</Text>
        </TouchableOpacity>
      </View>





      </View>
  )
}