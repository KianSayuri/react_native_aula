import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#f5f5f5',
    },

    container2: {
        justifyContent:'space-around',
        flexDirection:'row',
        padding: 70,
    },

    titulo: {
        margin: 8,
        fontSize: 15,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    inc: {
        marginTop: 60,
        fontSize: 40,
        justifyContent:'center',
        alignItems:'center',
        fontWeight: 'bold', 
    },

    botao: {
        margin: 40,
        padding: 16,
        width: '25%',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    txtBotao: {
        fontSize: 50,
        fontWeight: 'bolder',
        color: '#f5f5f5',
        justifyContent: 'center',
    },

    zerar: {
        fontSize: 30,
        fontWeight: 'bolder',
        color: '#f5f5f5',
        justifyContent: 'center',
    }
});

export default styles;