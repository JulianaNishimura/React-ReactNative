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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="2. Criação de Interface">
        <Drawer.Screen name="2. Criação de Interface" component={CriacaoInterface} />
        <Drawer.Screen name="2.1.1 Estrutura" component={EstruturaLayout} />
        <Drawer.Screen name="2.1.2 Tipos de Layout" component={TiposLayout} />
        <Drawer.Screen name="2.1.3 Gerenciador de Layout" component={GerenciadorLayout} />
        <Drawer.Screen name="2.1.4 Componentes de Tela" component={ComponentesTela} />
        <Drawer.Screen name="2.1.4 Dialogo Modal" component={DialogoModal} />
        <Drawer.Screen name="2.1.4 Tela com Barra" component={TelaComBarra} />
        <Drawer.Screen name="2.1.4 Controle de elementos" component={ControleElementos} />
        <Drawer.Screen name="2.1.4 Tratamento de Excecoes" component={TratamentoExcecoes} />      
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
