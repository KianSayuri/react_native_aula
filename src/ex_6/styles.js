import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcdd2',
    },

    exe: {
        fontSize: 30,
        color: '#b71c1c',
        fontWeight: 'bold',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 17,
        marginTop: 20,
        color: '#b71c1c',
        fontWeight: 'bold',
        alignItems: 'center',
    },

    label:{
        fontSize: 10,
        marginTop: 20,
        color: '#b71c1c',
        fontWeight: 'bolder',
        
    },

    txtSaida: {
        margin: 20,
        fontSize: 25,
        color: '#e53935',
    },

    txtEntrada: {
        height: 40,
        fontSize: 22,
        borderWidth: 3,
        borderRadius: 10,
        color: '#e53935',
        textAlign: 'center',
        borderColor: '#b71c1c',
    },

    txtButtom: {
        fontSize: 20,
        color: '#f5f5f5',
    },

    buttom: {
        alignItems: 'center',
        backgroundColor: '#ff2e2e',
        borderRadius: 10,
        borderColor: '#ff2e2e',
        borderWidth: 3,
        marginTop: 20,
        width:'100%',
    },

});

export default styles;