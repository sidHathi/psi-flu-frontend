import React, {useContext, useEffect, useState, createContext, PropsWithChildren} from 'react';

interface AuthContextType {
    authenticated: boolean;
}

export const AuthContext = createContext<{state: {authenticated: boolean}, dispatch: React.Dispatch<any>} | undefined>(
    undefined
);

function authReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return {authenticated: true}
    }
    case 'logout': {
      return {authenticated: false}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

interface AuthContextProps {
    children;
}

export default function AuthContextProvider(props: PropsWithChildren<AuthContextProps>): JSX.Element {
    const [state, dispatch] = React.useReducer(authReducer, {authenticated: false});
    const {children} = props;
    const value = {state, dispatch};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}