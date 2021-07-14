export const changeTitleAndId = (newTitle, newId) => {
    //console.log("Action-ChangeTitle");
    return {
        type: 'changeTitleAndId',
        payload: {
            newTitle,
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