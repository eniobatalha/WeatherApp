import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cityInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    cityInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#fff',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: '#fff',
        padding: 10,
    },
    saveButton: {
        backgroundColor: '#fff',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    saveButtonText: {
        color: '#0C3573',
        fontSize: 16,
        fontWeight: '600',
    },
});
