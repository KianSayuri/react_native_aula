import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        width: '100%',
        borderRadius: 20,
        alignItems:'center',
        // justifyContent:'space-around',
        backgroundColor: '#f5f5f5',
        // flexDirection:'row',
    },

    titulo: {
        margin: 8,
        fontSize: 40,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    botao: {
        margin: 40,
        padding: 16,
        width: '20%',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    txtBotao: {
        fontSize: 50,
        fontWeight: 'bolder',
        color: '#f5f5f5',
        justifyContent: 'center',
    },

    bottom: {
        margin: 40,
        padding: 16,
        width: '20%',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    txtBot: {

    },
});

export default styles;