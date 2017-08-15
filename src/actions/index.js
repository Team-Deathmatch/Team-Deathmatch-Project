import axios from "axios";

export function getOwnedGames(id) {
    return (dispatch) => {
        axios.get(`http://localhost:8080/steam/${id}`).then((response) => {
            dispatch(setOwnedGames(response.data.data.response.games))
        }).catch((error) =>{
            throw error
        })
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