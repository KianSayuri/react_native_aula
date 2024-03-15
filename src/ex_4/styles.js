import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        border: '5px solid #000',
        width: '70%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#f5f5f5',
    },

    container2: {
        justifyContent:'space-around',
        flexDirection:'row',
    },

    titulo: {
        margin: 8,
        fontSize: 40,
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
        // justifyContent: 'center',
    },

    zerar: {
        width: '50%',
        margin:20,
        fontSize: 25,
        fontWeight: 'bolder',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;