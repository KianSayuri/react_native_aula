import { View, Text} from 'react-native';

export default function Saudacoes({saudacao}) {
    return (
      <View style={styles.container}>
        <Text>{saudacao}</Text>
      </View>
    );
  }