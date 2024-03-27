import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 60,
        paddingHorizontal: 30,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerLeftText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
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
    box2Text: {
        color: '#fff',
        fontSize: 16,
    },
    boxTextBold: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },
    box: {
        width: '100%',
        marginBottom: 15,
        borderRadius: 25,
    },
    contentBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    box1: {
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    box1Text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    box2: {
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingVertical: 15,
    },
    box2Line1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 25,
    },
    box2Line2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 10,
        width: '100%',
    },
    box3: {
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingVertical: 20,
    },
    box3Line1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 25,
        marginBottom: 10,
    },
    box3Line2: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
});
