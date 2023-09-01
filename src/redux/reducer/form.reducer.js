
const initialState = {
    name: '',
    email: ''
}

const userInfo = (state = initialState, action) =>{
    if(action.type === 'NAME')
        return {...state, name: action.payload};
    else if(action.type === 'EMAIL')
        return {...state, email: action.payload};
    else return state;
}

export default userInfo;