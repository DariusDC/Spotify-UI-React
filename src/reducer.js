export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // // Remove before deploy
  // token:
  //   "BQD7zBp7O2TM1R0eNxrtNK32GzdBPUJHqUTqFEa_BzmJPCY45NkZaBiCMNf8MCP1UpydPHrDR10qa-nKzWEupVxrAPfKHVrLm18jNaJpn26rcKswuKxCAjgAkp9hhvwRISWUguvjl4hr2XHJyTjtZCZB311SWvPiztkVCaxUbrqHvExk",
};

const reducer = (state, action) => {
  console.log(action);

  //   Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    default:
      return state;
  }
};

export default reducer;
