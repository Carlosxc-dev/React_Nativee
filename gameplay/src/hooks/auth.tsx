import React, { ReactNode, createContext, useContext, useState } from "react";

import * as AuthSession from "expo-auth-session"

import {
    REDIRECT_URL,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
} from "../config";
import { api } from "../services/api";

type User = {
    id: string,
    username: string,
    firstName: string,
    avatar: string,
    email: string,
    token: string
}

type AuthContextData = {
    user: User;
    signIn: () => Promise<void>
}
type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({});

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false) // saber a aplicacao terminou

    async function signIn() {
        try {

            setLoading(true)

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            
            const response = await AuthSession.startAsync({ authUrl })
            console.log(response);
            

        } catch {
            throw new Error("Nao foi possivel autenticar");
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }