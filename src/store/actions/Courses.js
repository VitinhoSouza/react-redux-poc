export const changeTitle = (newTitle) => {
    //console.log("Action-ChangeTitle");
    return {
        type: 'changeTitle',
        payload: {
            newTitle,
        }
    }
}

export const increaseId = (newId) => {
    //console.log("Action-ChangeTitle");
    return {
        type: 'increaseId',
        payload: {
            newId,
        }
    }
}

/* export function alterarN2(novoN2){
    return {
        type: NOVO_N2,
        payload: novoN2
    }
} */