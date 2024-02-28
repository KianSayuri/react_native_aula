import {View, Text} from 'react-native';

import Saudacoes from './saudacoes';

export default function Atividade_1 ({saudacao}) {
    return (
        <View>
            <Saudacoes saudacao={'Olá Maria'}/>
        </View>
    );
}