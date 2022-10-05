import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const SongAppHeader = ({ title, goToFavorites }) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header dark={false} style={{ backgroundColor: "darkturquoise" }}>
      {navigation.canGoBack() ? (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      ) : null}
      <Appbar.Content title={title} />
      {goToFavorites ? (
        <Button onPress={goToFavorites}>
          <AntDesign name="heart" size={25} color="black" />
        </Button>
      ) : null}
    </Appbar.Header>
  );
};