import React, { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";
import * as AuthSession from "expo-auth-session"

import {
    REDIRECT_URL,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
} from "../config";

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
    loading: boolean
    signIn: () => Promise<void>
}
type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string,
    }
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false) // saber a aplicacao terminou

    async function signIn() {
        try {

            setLoading(true)

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
            
            const {type, params} = await AuthSession
            .startAsync({ authUrl }) as AuthorizationResponse
            if (type == "success") {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`
                
                const userInfo = await api.get('/users/@me')

                const firstName = userInfo.data.username.split(' ')[1]
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

                setUser({
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                });
                setLoading(false)
            }else{
                setLoading(false)
            }

        } catch {
            throw new Error("Nao foi possivel autenticar");
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
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

export { 
    AuthProvider, 
    useAuth 
}