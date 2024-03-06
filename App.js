import { StyleSheet, View } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import Atividade_1 from './src/atividade_1/index';
//import Props from "./src/ex_2";
import Exemplo_3 from './src/ex_3';

export default function App(){
  return(
    <View style={styles.container}>
      <Exemplo_3 />
    </View>
  );
}

/*export default function App() {
  return(
    <View style={styles.container}>
      <Props mensagem={'Sistem react-native'}/>
      <Props mensagem={'Hoje está calor'}/>
      <StatusBar style="auto" />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 18, 
  },
});
