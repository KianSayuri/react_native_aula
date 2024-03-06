import { View, Text} from 'react-native';

const Saudacoes = (props) => {
    return (
      <View>
        <Text style={{textAlign: 'center'}}>
          Olá {props.name}
        </Text>
      </View>
    );
  }

export default Saudacoes;