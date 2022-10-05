import React from "react";
import { Button, Title, Card, Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

export const SongItem = ({
  isInFavorites,
  goToDetails,
  addToFavorites,
  removeFromFavorites,
  trackData,
}) => {
  return (
    <Card style={{ marginVertical: 5 }}>
      <Card.Title
        title={<Title onPress={goToDetails}>{trackData.trackName}</Title>}
        subtitle={trackData.artistName}
        style={{ paddingVertical: 10, paddingHorizontal: 15 }}
        leftStyle={{ marginRight: 25 }}
        left={() => (
          <Avatar.Image
            size={50}
            source={{
              uri: trackData.artworkUrl100.replace("100x100", "600x600"),
            }}
          />
        )}
        right={() => (
          <Button
            onPress={isInFavorites ? removeFromFavorites : addToFavorites}
          >
            <AntDesign
              name="heart"
              size={25}
              color={isInFavorites ? "tomato" : "lightgray"}
            />
          </Button>
        )}
      />
    </Card>
  );
};