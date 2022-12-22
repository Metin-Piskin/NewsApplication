import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Pages/Home';
import Detail from './Pages/Datail';

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerTitle: 'News',
                        headerTitleStyle: {
                            fontFamily: 'CourierPrime-Bold',
                        },
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name='Detail'
                    component={Detail}
                    options={{
                        headerTitle: 'News Detail',
                        headerTitleStyle: {
                            fontFamily: 'CourierPrime-Bold',
                        },
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;