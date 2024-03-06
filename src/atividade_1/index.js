import {View, Text, Image} from 'react-native';

import Saudacoes from './saudacoes';

import styles from './styles';

import logo from '../../assets/react-native imagem.png';

export default function Atividade_1 () {
    return (
        <View style={StyleSheet.container}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.paragraph}>
             Exemplo 2
            </Text>
                <Saudacoes name= 'Maria'/>
                <Saudacoes name= 'Mario'/>
                <Saudacoes name= 'Bruna'/>
                <Saudacoes name= 'Bruno'/>
        </View>
    );
}