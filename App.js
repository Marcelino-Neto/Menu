
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './telas/Login';
import Cardapio from './telas/Cardapio';
import Cadastrar from './telas/Cadastrar';
import Detalhes from './telas/Detalhes';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Criar conta" component={Cadastrar} />
        <Stack.Screen name="Detalhes" component={Detalhes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
