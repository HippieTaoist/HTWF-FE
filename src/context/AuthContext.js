import React, {useReducer, createContext} from 'react';

export const AuthContext = createContext({});
const initialState = {user:null};

function reducer(state, action) {

    switch (action.type){
        case "LOGIN":
        console.log(action);
        return {
          user: {
              isAuth:true,
              email: action.email,
              username:action.username,
              profile:{
                  email:action.email,
                  username:action.username,
                  _id:action._id,
                  nameFirst:action.nameFirst,
                  nameLast:action.nameLast,
                  createdDate:action.createdDate,
                  updatedLast:action.updatedLast,
                  userLevel:action.userLevel,
              }
          },
        };
        case "LOGOUT":
            return state;
    }
}

function AuthContextComponent({children}){
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
                                     {children}
                                     </AuthContext.Provider>}
    )
}