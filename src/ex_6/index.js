import styles from './styles';
import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Exemplo_6 () {

    const [ mensagem, setMensagem ] = useState ('Nome Completo');
    const [mens2, setMens2 ] = useState ('');
    const [ mensTela, setMensTela ] = useState ('');

    function attMsgHandler (){
        setMensTela(mens2);
        setMensagem(mens2);

    }
    return(
    <View styles = {styles.container}>
        <Text style = {styles.exe}>
            Exemplo 6
        </Text>

        <Text style = {styles.txtSaida}>
            {mensagem}
        </Text>

        <Text style = {styles.label}>
            Nome
        </Text>

        <TextInput
            style = {styles.txtEntrada}
            onChangeText={(txt) => setMensagem (txt)}
        />

        <Text style = {styles.label}>
            Sobrenome
        </Text>

        <TextInput
            style = {styles.txtEntrada}
            onChangeText={(txt) => setMensagem (txt)}
        />

        <Pressable
            style = {styles.buttom}
            onPress = {() => attMsgHandler ()}
            value = {mens2}
        >
            <Text style = {styles.txtButtom}>
                Exibir Texto
            </Text>
        </Pressable>
    </View>
    );
}
