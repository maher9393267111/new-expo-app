import { View, SafeAreaView, StatusBar , Text} from "react-native";
//import RootNavigation from "./navigation/navigation";
import {} from "./firebase"

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import Home from "./screens/Home";
import { Provider } from "react-native-paper";


export default function App() {

  return (
     
    <Provider>
    
<Home/>

  </Provider>
      
  
     
  );
}
