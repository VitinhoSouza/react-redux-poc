const initialState = {
    id:1,
    title:"Título",
}

export default function(state = initialState, action){

    switch(action.type){
        case 'changeTitleAndId':
            //console.log("Reducer-changeTitleAndId");
            return {
                ...state,
                title: action.payload.newTitle,
                id:action.payload.newId
            }
        default:
            console.log("Reducer-Default");
            return state;
    }
}