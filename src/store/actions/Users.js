export const addUser = (newUsers) => {
    //console.log("Action-ChangeTitle");
    return {
        type: 'addUser',
        payload: {
            newUsers,
        }
    }
}