const initialState = {
    name : "José",
}

export default function(state = initialState, action){

    switch(action.type){
        case 'addUser':
            return {
                ...state,
                name: action.payload.newUser
            }

        default:
            console.log("Reducer-Default");
            return state;
    }
}