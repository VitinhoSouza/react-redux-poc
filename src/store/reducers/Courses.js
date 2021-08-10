const initialState = {
    id:1,
    title:"Título",
}

export default function(state = initialState, action){

    switch(action.type){
        case 'changeTitle':
            //console.log("Reducer-changeTitleAndId");
            return {
                ...state,
                title: action.payload.newTitle,
            }

        case 'increaseId':
            //console.log("Reducer-changeTitleAndId");
            return {
                ...state,
                id:action.payload.newId
            }

        default:
            console.log("Reducer-Default");
            return state;
    }
}