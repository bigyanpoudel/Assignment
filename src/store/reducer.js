let initialState = {
    isAuth:false,
    user:{},
    error:null
}

export const auth = (state = initialState,action)=>{
    switch(action.type){
        case "SUCCESS":
            return{
                ...state,
                isAuth:true,
                user: action.payload
            }
        case "ERROR":
            return{
                ...state,
                error:action.payload
            }
        case "LOGOUT":
            return{
                ...state,
                isAuth:false,
                user:action.payload
            }
        default:
            return state;
    }
}