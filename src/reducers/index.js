let defaultState = {
    ownedGameList: [],
    currentUser: {},
    gamesOwned: []
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
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;