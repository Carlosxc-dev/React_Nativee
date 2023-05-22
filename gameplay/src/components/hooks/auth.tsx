import React, { ReactNode, createContext, useContext, useState } from "react";

import * as AuthSession from "expo-auth-session"

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
}
type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({});

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false) // saber a aplicacao terminou

    function SignIn() {
        try {

            setLoading(true)

            const authUrl = 'https://discord.com/api/oauth2/authorize?client_id=1110235356240027809&redirect_uri=http%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20guilds%20email%20connections'

            AuthSession.
            startAsync({authUrl })
            
        } catch (error) {
            
        }
    }

    return (
        <AuthContext.Provider value={{
            user
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