import React from 'react'
import { NavigationContainer } from "@react-navigation/native"

import { AuthRoutes } from './auth.routes'
import { navTheme } from './style';

export function Routes() {
    return (
        //defini o goBack ir para traz 
        <NavigationContainer
            theme={navTheme}
        >
            <AuthRoutes />
        </NavigationContainer>
    )
}