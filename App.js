import { View, SafeAreaView, StatusBar , Text} from "react-native";
//import RootNavigation from "./navigation/navigation";
import {} from "./firebase"
import { NativeBaseProvider } from "native-base";

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import Home from "./screens/Home";
import MapScreen from "./screens/maps";
import { Provider } from "react-native-paper";
import RegisterScreen from './screens/Register'


export default function App() {

  return (
    <NativeBaseProvider >
     
    <Provider>
    
{/* <Home/> */}

{/* <RegisterScreen/> */}

<MapScreen/>



  </Provider>

  </NativeBaseProvider>
      
  
     
  );
}
