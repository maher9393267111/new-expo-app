import React from "react";
import { View, StyleSheet } from "react-native";

import { observer } from "mobx-react-lite";
import { SongList } from "../components/SongList";
import { SongAppHeader } from "../components/SongAppHeader";
import { store } from "../store";
import { SCREEN_NAMES } from "../navigation/screenNames";

export const FavoritesScreen = observer(({ navigation }) => {
  const goToDetails = (track) => {
    navigation.navigate(SCREEN_NAMES.SONG_DETAILS, {
      track,
    });
  };
  return (
    <>
      <SongAppHeader title="Favorites" />
      <View style={styles.content}>
        <SongList goToDetails={goToDetails} songs={store.favorites} />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 8,
  },
});