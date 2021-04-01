export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remember this stucked u earlier
    // token: `BQBxRCVLZmLk8sEKmQzufGRrYI89XcJpU-V4U0ZOidReac1r0C1l6HfxOClq_NC6hoYLr4JH0lJRodV0GeCtqxvYdVBgZ4qRrikTAfRrkx4p7iWjAZxIeFx6SikJwPgM0hk5ehW1p4eIDUjr_KfLM0jDZcItHz1oOmS-aDxBVmue9Iy9FBBP`,
  };

  const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };

    
        case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };



    case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
    };
  

    case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
     };

     case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  

      default:  
      return state;  
   }
  
};

export default reducer;
