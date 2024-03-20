import { useState} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';

import styles from './styles';

export default function Exemplo_4 (){

    const [numero, setNumero] = useState(0);

    function incremento () {
        const incr = numero + 1;
        setNumero(incr);
        //console.log(numero);
    }

    function retirada(){
        const ret = numero - 1;
        setNumero (ret);
    }

    function resetar() {
        const reset = 0;
        setNumero(reset);
    }

    return (
        <View style = {styles.container} >

             <Text style = {styles.titulo}>
                    Atividade 3
                </Text>

            <View style = {styles.container2}>
      
                <Pressable 
                    style ={ styles.botao} 
                    onPress={() => retirada()}
                >

                <Text style ={styles.txtBotao}> 
                -
                </Text>
                </Pressable>

                <Text style ={styles.inc}> 
                    {numero} 
                </Text>
            
                <Pressable
                style ={ styles.botao} 
                onPress={() => incremento()}
                >
                <Text style ={styles.txtBotao}> 
                    +
                </Text>
                </Pressable>
                
            </View>

                <Pressable
                style ={ styles.zerar} 
                onPress={() => resetar()}
                >
                <Text style ={styles.txtBotao}> 
                    Zerar
                </Text>
                </Pressable>
            
        </View>
        
    );
}