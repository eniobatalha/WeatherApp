import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 6,
        alignItems: 'center',
        marginHorizontal: 5,
        marginBottom: 5,
    },
    selectedCard: {
        backgroundColor: 'rgba(29, 105, 222, 0.1)',
        borderWidth: 1,
        borderColor: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        paddingVertical: 5,
    },
});
