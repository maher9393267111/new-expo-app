import { clientApi } from "./clientApi";

export const SongApi = {
  /**
   * @param {{limit: number, offset: number, term: string}} params request params list
   * @param {AbortSignal} signal
   */
  searchSongs(params, signal) {
    return clientApi.get("/search/", {
      params,
      signal,
    });
  },
};
