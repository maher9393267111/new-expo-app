import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SongListScreen } from "../screens/SongListScreen";
import { SongDetailsScreen } from "../screens/SongDetailsScreen";

import { SCREEN_NAMES } from "./screenNames";
import { FavoritesScreen } from "../screens/FavoritesScreen";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.SONG_LIST}
        headerMode="none"
      >
        <Stack.Screen
          name={SCREEN_NAMES.SONG_LIST}
          component={SongListScreen}
        />
        <Stack.Screen
          name={SCREEN_NAMES.SONG_DETAILS}
          component={SongDetailsScreen}
        />
        <Stack.Screen
          name={SCREEN_NAMES.FAVORITE_LIST}
          component={FavoritesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// <Stack.Screen name='Favorites' component={FavoritesScreen} />
// <Stack.Screen name='SongDetails' component={SongDetailsScreen} />