const GET_USERS = "search/GET_USERS";

const search_users = (users) => ({
  type: GET_USERS,
  users
});

export const searchUsers=(input)=> async(dispatch)=>{
    const obj ={
        input
    }
    const res = await fetch("/api/users/search", {
        method: "PUT",
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(obj)
    })
    const data = await res.json()
    dispatchEvent(search_users(data))
}

const initialState = {}
const search = (state = initialState, action) => {
    switch (action.type){
        case GET_USERS:
            return {...state, ...action.users}
            default:
                return state
    }
};

export default search;