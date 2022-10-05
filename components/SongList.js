import React from "react";
import { FlatList, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { SongItem } from "./SongItem";
import { store } from "../store";

export const SongList = observer(
  ({ songs = [], goToDetails, onEndReached }) => {
    const renderItem = React.useCallback(({ item }) => {
      const id =
        item.wrapperType === "audiobook" ? item.collectionId : item.trackId;
      const isFavorite = store.checkIsInFavorite(id);
      return (
        <SongItem
          addToFavorites={() => store.addToFavorites(item)}
          removeFromFavorites={() => {
            store.removeFromFavorites(item.wrapperType, id);
          }}
          goToDetails={() => {
            goToDetails(item);
          }}
          trackData={item}
          isInFavorites={isFavorite}
        />
      );
    }, []);

    return (
      <FlatList
        data={songs}
        extraData={toJS(store.favorites)}
        keyExtractor={(item) =>
          item.trackId?.toString() || item.collectionId?.toString()
        }
        renderItem={renderItem}
        ListEmptyComponent={<Text>List is empty</Text>}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    );
  }
);