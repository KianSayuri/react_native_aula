import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
    },

    titulo: {
        margin: 8,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },

    botao: {
        margin: 18,
        padding: 16,
        width: '70%',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#000',
    },

    txtBotao: {
        fontSize: 20,
        color: '#f5f5f5',
    },
});

export default styles;