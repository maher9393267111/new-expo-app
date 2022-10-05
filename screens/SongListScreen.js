import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import debounce from "lodash/debounce";

import { SCREEN_NAMES } from "../navigation/screenNames";
import { SongApi } from "../services/api/SongApi";
import { SongList } from "../components/SongList";
import { SongAppHeader } from "../components/SongAppHeader";
const DEFAULT_LIMIT = 10;

export const SongListScreen = ({ navigation }) => {
  const abortController = React.useRef();
  const debouncedFetchResults = React.useRef(
    debounce((term) => {
      fetchResults(term);
    }, 300)
  );
  const offset = React.useRef(0);
  const [end, setEnd] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  const onChangeText = (text) => {
    setQuery(text);
    setResults([]);
    offset.current = 0;
    if (text.length >= 3) {
    //  debouncedFetchResults.current(text);
      console.log('----->>>>' ,    debouncedFetchResults.current(text))
    }
  };
  const goToDetails = (track) => {
    navigation.navigate(SCREEN_NAMES.SONG_DETAILS, {
      track,
    });
  };
  const goToFavorites = () => {
    navigation.navigate(SCREEN_NAMES.FAVORITE_LIST);
  };

  const fetchResults = async (term) => {
    try {
      if (abortController.current) {
      console.log('------->>>>1111' , abortController.current)
        abortController.current.abort();
      }
      abortController.current = new AbortController();
      const { data } = await SongApi.searchSongs(
        {
          limit: DEFAULT_LIMIT,
          offset: offset.current,
          term,
        },
        abortController.current.signal
      );
      setResults((prev) => [...prev, ...data.results]);
     
      offset.current += DEFAULT_LIMIT;
      console.log('++++++' , offset?.current)
      if (data.resultCount < DEFAULT_LIMIT) {
        setEnd(true);
      }
      setLoading(false);
    } catch (error) {}
  };

  return (
    <>
      <SongAppHeader title="Search song" goToFavorites={goToFavorites} />
      <View style={styles.content}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeText}
          value={query}
          style={styles.searchBar}
        />
        <SongList
          songs={results}
          goToDetails={goToDetails}
          onEndReached={() => {
            if (!end) {
              fetchResults(query);
            }
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 8,
  },
  searchBar: {
    marginBottom: 20,
  },
});