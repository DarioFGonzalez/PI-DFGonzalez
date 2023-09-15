import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState=
{
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action)=>
{
    switch(action.type)
    {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
        case FILTER:
            let byGender = state.allCharacters.filter((x)=>x.gender===action.payload);
            return {...state, myFavorites: byGender};
        case ORDER:
            let byAlpha = state.allCharacters;
            return{...state, myFavorites: action.payload==='A'
            ?byAlpha.sort((a,b)=> a.id - b.id)
            :byAlpha.sort((a,b)=> b.id - a.id)}
        default:
            return {...state};
    }
}

export default rootReducer;