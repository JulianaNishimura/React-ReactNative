import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import TelaInicial from '../screens/TelaInicial';
import EstruturaLayout from '../screens/EstruturaLayout';
import CriacaoInterface from '../screens/CriacaoInterface';
import TiposLayout from '../screens/TiposLayout';
import GerenciadorLayout from '../screens/GerenciadorLayout'
import ComponentesTela from '../screens/ComponentesTela';
import DialogoModal from '../screens/DialogoModal';
import TelaComBarra from '../screens/TelaComBarra';
import ControleElementos from '../screens/ControleElementos';
import TratamentoExcecoes from '../screens/TratamentoExcecoes';
import ManipulacaoListas from '../screens/ManipulacaoListas';
import EntradaESaida from '../screens/EntradaEsaida';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="2. Criação de Interface">
        <Drawer.Screen name="2. Criação de Interface" component={CriacaoInterface} />
        <Drawer.Screen name="2.1 Estrutura" component={EstruturaLayout} />
        <Drawer.Screen name="2.2 Tipos de Layout" component={TiposLayout} />
        <Drawer.Screen name="2.3 Gerenciador de Layout" component={GerenciadorLayout} />
        <Drawer.Screen name="2.4 Componentes de Tela" component={ComponentesTela} />
        <Drawer.Screen name="2.5 Dialogo Modal" component={DialogoModal} />
        <Drawer.Screen name="2.6 Tela com Barra" component={TelaComBarra} />
        <Drawer.Screen name="2.7 Controle de elementos" component={ControleElementos} />
        <Drawer.Screen name="2.8 Tratamento de Excecoes" component={TratamentoExcecoes} /> 
        <Drawer.Screen name="2.9 Manipulação de Listas" component={ManipulacaoListas} />
        <Drawer.Screen name="2.10 Entrada E Saida" component={EntradaESaida} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
