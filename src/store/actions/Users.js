export const addUser = (newUser) => {
    //console.log("Action-ChangeTitle");
    return {
        type: 'addUser',
        payload: {
            newUser,
        }
    }
}