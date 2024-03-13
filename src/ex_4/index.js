import { useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Exemplo_4 (){

    const [numero, setNumero] = useState(3);

    function incremento () {
        numero++;
        console.log(numero);
    }

    return (
        <View style = {styles.container} >
            <View>
                <Text style = {styles.titulo}>Atividade 3</Text>
      
                <TouchableOpacity 
                    style ={ styles.botao} 
                    onPress={() => {''}}
                >

                <Text style ={styles.txtBotao}> 
                -
                </Text>
                </TouchableOpacity>

                <Text style ={styles.titulo}> 
                    {numero} 
                </Text>
            
                <TouchableOpacity
                style ={ styles.botao} 
                onPress={() => {}}
                >
                <Text style ={styles.txtBotao}> 
                    +
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style ={ styles.botao} 
                onPress={() => {}}
                >
                <Text style ={styles.txtBotao}> 
                    Zerar
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}