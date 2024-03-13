import { useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Exemplo_3 (){

    const [numero, setNumero] = useState(3);
    //let numero = 0;
    // setNumero é o que garante a chamada dentro do array??*********

    function Ola (nome) {
        alert (`Olá ${nome}`);
        // quando há soma/junção para formação da frase usamos a concatenação
    }

    {/* Para não usar o return usamos o {} ao final da frase daa function */}

    function incremento () {
        numero++;
        console.log(numero);
    }

    return (
        <View style = {styles.container} >
            <Text style = {styles.titulo}>
                Exemplo_3
            </Text>
            <TouchableOpacity 
                style ={ styles.botao} 
                onPress={(Ola) => Ola('Sayuri')}
            >
            {/* => Dear Function, usado para "chamar uma function dentro da outra?"************** */}
            {/* Podemos quebrar a linha a partir de cada "função" chamada, neste caso o style e o OnPress */}
            {/* OnPress é o msm que OnClick, o () é o parametro e o {} é onde seria inserido o codigo */}

            <Text style ={styles.txtBotao}> 
                Botão
            </Text>
            </TouchableOpacity>

            <Text style ={styles.titulo}> 
                Valor: {numero} 
            </Text>
            
            <TouchableOpacity
            style ={ styles.botao} 
            onPress={() => {}}
            >
            <Text style ={styles.txtBotao}> 
                +1
            </Text>
            </TouchableOpacity>

        </View>
    );
}