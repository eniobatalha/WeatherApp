import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';

// StatusBar serve para mudar a cor da barra de status do celular (onde mostra hora, bateria, área, etc...)
export default function App() {
  return (
    <>
      <Home/>
      <StatusBar style="light" />
    </>
  );
}
