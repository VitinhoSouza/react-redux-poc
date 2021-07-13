const initialState = {
    id:1,
    title:"Título",
}

export default function(state = initialState, action){

    switch(action.type){
        case 'changeTitle':
            //console.log("Reducer-ChangeTitle");
            return {
                ...state,
                title: action.payload
            }
        /* case NOVO_N2:
            return {
                ...state,
                n2: action.payload
            } */
        default:
            console.log("Reducer-Default");
            return state;
    }
}