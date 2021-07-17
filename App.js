import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Resultado from './screens/showCepInfo';

const Pilha = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Home" 
                    component={Home}
                    options={{ title: 'Busca Cep' }}
                />
                <Pilha.Screen
                    name="Resultado"
                    component={Resultado}
                    options={{ title: 'Resultado' }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    );
};

export default App;
