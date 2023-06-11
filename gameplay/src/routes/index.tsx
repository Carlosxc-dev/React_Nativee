import React, { useContext } from 'react'
import { NavigationContainer } from "@react-navigation/native"

import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/signin';

export function Routes() {

    const {user} = useAuth()

    return (
        //defini o goBack ir para traz 
        <NavigationContainer >
            {user.id ?  <AuthRoutes /> : <SignIn/>}     {/*erro esta aqui*/}
        </NavigationContainer>
    )
}