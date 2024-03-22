import styles from './styles';
import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Exemplo_5 () {

    const [ mensagem, setMensagem ] = useState ('Sua mensagem aqui!');
    const [mens2, setMens2 ] = useState ('Outra mensagem');
    const [ mensTela, setMensTela ] = useState ('');

    function atualizaMensagemHandler (){
        setMensTela(mens2);
        setMens2('');
    }

    return (
        <View style = {styles.container}>
            <Text  style = {styles.titulo}>
                Exemplo 5
            </Text>

            <Text style = {styles.txtSaida}>
                {mensagem}
            </Text>

            <TextInput 
                style = {styles.txtEntrada}
                placeholder = 'Digite o texto aqui...'
                onChangeText={(txt) => setMensagem (txt)}
            />

            <Text style = {styles.txtSaida}>
                {mensTela}
            </Text>

            <TextInput
                style = {styles.txtEntrada}
                placeholder = 'Outro texto'
                onChangeText = {(entrada) => setMens2 (entrada)}
                value = {mens2}
                /*
                Ele é o UPDATE, ele pega o valor antigo 
                e atribui a um novo
                */
            />

            <Pressable onPress = {() => atualizaMensagemHandler ()}>
                <Text>
                    Exibir mensagem
                </Text>
            </Pressable>

        </View>
    );
}