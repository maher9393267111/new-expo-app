import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Button,
  Title,
  Card,
  Subheading,
  Headline,
  Caption,
  Appbar,
} from "react-native-paper";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";
import { store } from "../store";
import { SCREEN_NAMES } from "../navigation/screenNames";
import { SongAppHeader } from "../components/SongAppHeader";

export const SongDetailsScreen = observer(({ navigation, route }) => {
  const songData = route.params.track;

  const year = new Date(songData.releaseDate).getUTCFullYear();
  const id =
    songData.wrapperType === "audiobook"
      ? songData.collectionId
      : songData.trackId;

  const isInFavorites = store.checkIsInFavorite(id);

  const goBack = () => {
    navigation.goBack();
  };

  const goToFavorites = () => {
    navigation.navigate(SCREEN_NAMES.FAVORITE_LIST);
  };

  const removeFromFavorites = () => {
    store.removeFromFavorites(songData.wrapperType, id);
  };

  const addToFavorites = () => {
    store.addToFavorites(songData);
  };

  return (
    <>
      <SongAppHeader title="Details" goToFavorites={goToFavorites} />
      <Card style={{ marginVertical: 5 }}>
        <Card.Cover
          source={{ uri: songData.artworkUrl100.replace("100x100", "600x600") }}
        />
        <Card.Content>
          <Title>{songData.artistName}</Title>
          <Headline>{songData.trackName}</Headline>
          <Subheading>{songData.collectionName}</Subheading>
          <Caption>
            {songData.primaryGenreName} ({year})
          </Caption>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={isInFavorites ? removeFromFavorites : addToFavorites}
          >
            <AntDesign
              name="heart"
              size={25}
              color={isInFavorites ? "tomato" : "lightgray"}
            />
          </Button>
        </Card.Actions>
      </Card>
    </>
  );
});