import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        width: '100%',
    },
    temperaturasContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    temperaturaText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 5,
    },
});
