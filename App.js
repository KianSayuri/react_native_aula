//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Atividade_1 from './src/atividade_1/index';
//import Props from "./src/ex_2";

export default function App(){
  return(
    <View style={styles.container}>
      <Atividade_1/>
    </View>
  );
}

/*export default function App() {
  return (
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
  },
});
