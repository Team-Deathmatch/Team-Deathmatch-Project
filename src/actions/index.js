import axios from "axios";

export function getIndGame(id) {
    return (dispatch) =>{
        console.log(id);
        axios.get(`http://localhost:8080/game/${id}`).then((response) =>{
            dispatch(setIndGame(response.data.data[id].data));
        }).catch((error) =>{
            throw error
        })
    }

}

export function searchGames(str) {
    return (dispatch) =>{
        axios.get(`http://localhost:8080/find-games/${str}`).then((response) =>{
            dispatch(setGameSearch(response.data.data))
        }).catch((error) =>{
            throw error
        })
    }

}

export function getOwnedGames(id) {
    return (dispatch) => {
        axios.get(`http://localhost:8080/steam/${id}`).then((response) => {
            dispatch(setOwnedGames(response.data.data.response.games))
        }).catch((error) =>{
            throw error
        })
    }

}

export function setCurrentPic(data) {
    return {
        type: "SET_CURRENT_PIC",
        data
    }

}

export function setIndGame(data) {
    return {
        type: "IND_GAME",
        data
    }

}

export function setGameSearch(data) {
    return {
        type: "GAME_SEARCH",
        data
    }

}

export function setOwnedGames(data) {
    return {
        type: "SET_OWNED_GAMES",
        data
    }
}

export function setUser(data) {
    return {
        type: "SET_USER",
        data
    }

}


export function setData(data) {
    return {
        type: "SET_DATA",
        data
    }
}