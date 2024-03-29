import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './paginas/Principal';
import Repositorios from './paginas/Repositorios';
import CriarRepositorio from './paginas/CriarRepositorio';
import InfoRepositorio from './paginas/InfoRepositorio';
import Seguidores from './paginas/Seguidores';
import Seguindo from './paginas/Seguindo';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" options={{ title: "Perfil", headerTitleAlign: 'center' }} component={Principal} />
                <Tab.Screen name="Repositorios" options={{ title: "Repositórios", headerTitleAlign: 'center' }}  component={Repositorios} />
                <Tab.Screen name="CriarRepositorio" options={{ title: "Criar Repositório", headerTitleAlign: 'center' }} component={CriarRepositorio} />
                <Tab.Screen name="InfoRepositorio" options={{ title: "Repositório Info", headerTitleAlign: 'center' }} component={InfoRepositorio} />
            
                <Tab.Screen name="Seguidores" options={{ title: "Seguidores", headerTitleAlign: 'center' }} component={Seguidores} />
                <Tab.Screen name="Seguindo" options={{ title: "Seguindo", headerTitleAlign: 'center' }} component={Seguindo} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}