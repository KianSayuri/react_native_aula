import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#ffcdd2',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#b71c1c',
    },

    txtSaida: {
        margin: 20,
        fontSize: 25,
        color: '#e53935',
    },

    txtEntrada: {
        borderWidth: 3,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#b71c1c',
        height: 40,
        width: '70%',
        color: '#e53935',
        borderRadius: 10,
    },
});

export default styles;