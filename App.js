import { View, SafeAreaView, StatusBar , Text} from "react-native";
//import RootNavigation from "./navigation/navigation";
import {} from "./firebase"

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import { SongListScreen } from "./screens/SongListScreen";
import { Provider } from "react-native-paper";
import { AppNavigator } from "./navigation/AppNavigator";


export default function App() {

  return (
     
    <Provider>
    <AppNavigator />
  </Provider>
      
  
     
  );
}
