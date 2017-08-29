let defaultState = {
    ownedGameList: [],
    currentUser: {},
    gamesOwned: [],
    searchedGames: [],
    indGame: {},
    currentPic: "",
    currentWishlist: []
};

let mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_USER") {
        return {
            ...state,
            currentUser: action.data
        }
    } else if (action.type === "SET_OWNED_GAMES") {
        return {
            ...state,
            gamesOwned: action.data
        }
    } else if(action.type === "GAME_SEARCH"){
        return {
            ...state,
            searchedGames: action.data
        }
    } else if(action.type === "IND_GAME"){
        return {
            ...state,
            indGame: action.data
        }

    } else if(action.type === "SET_CURRENT_PIC"){
        return {
            ...state,
            currentPic: action.data
        }

    } else if(action.type === "SET_WISHLIST"){
        return {
            ...state,
            currentWishlist: action.data
        }

    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;