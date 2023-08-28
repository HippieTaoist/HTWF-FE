import React, { useReducer, createContext } from 'react';

export const AuthContext = createContext({});

const initialState = {
  user: {
    isAuth: true,
    email: '',
    username: '',
    profile: {
      email: '',
      username: '',
      _id: '',
      nameFirst: '',
      nameLast: '',
      createdDate: '',
      updatedLast: '',
      userLevel: '',
    },
  },
};
// const initialState = {
//   user: {
//     email: '',
//   },
// };

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('action', action);
      return {
        user: {
          isAuth: true,
          email: action.email,
          username: action.username,
          profile: {
            email: action.email,
            username: action.username,
            _id: action._id,
            nameFirst: action.nameFirst,
            nameLast: action.nameLast,
            createdDate: action.createdDate,
            updatedLast: action.updatedLast,
            userLevel: action.userLevel,
          },
        },
      };
    case 'LOGOUT':
      return {
        user: null,
      };

    default:
      return state;
  }
}

function AuthContextComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextComponent;
