const initialState = {
    names: ["José", "Manoel"],
}

export default function(state = initialState, action){

    switch(action.type){
        case 'addUser':
            return {
                ...state,
                names: action.payload.newUsers
            }

        default:
            console.log("Reducer-Default");
            return state;
    }
}