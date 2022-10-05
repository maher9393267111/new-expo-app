import { makeAutoObservable } from "mobx";

export class FavoritesStore {
  favorites = [];
  constructor() {
    makeAutoObservable(this);
  }
  addToFavorites(track) {
    this.favorites.push(track);
  }
  // because in result may be audiobook or track we need "wrapperType" in arguments
  removeFromFavorites(type, id) {
    switch (type) {
      case "track": {
        this.removeTrack(id);
        break;
      }
      case "audiobook": {
        this.removeAudiobook(id);
        break;
      }
    }
  }
  removeTrack(id) {
    this.favorites = this.favorites.filter((item) => item.trackId !== id);
  }
  removeAudiobook(id) {
    this.favorites = this.favorites.filter((item) => item.collectionId !== id);
  }
  checkIsInFavorite(id) {
    return this.favorites.some(
      (item) => item.trackId === id || item.collectionId === id
    );
  }
}