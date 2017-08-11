let defaulState = {
    thisIsntReal: ""
};

let mainReducer = (state = defaulState, action) => {
    if(action.type === "SET_DATA")  {

    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;