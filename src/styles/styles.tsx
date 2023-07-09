import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 24,
    },
    fab: {
        position: 'absolute',
        right: -8,
        bottom: 16,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600'
    },
    subTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    profileImage: {
        marginEnd: 16,
    },
    profileName: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold'
    },
    input: {
        width: 328,
        borderRadius: 28,
        backgroundColor: '#767AE7',
        marginBottom: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF',
        borderWidth: 0
    },
    button: {
        backgroundColor: "#767AE7",
        borderRadius: 28,
        marginTop: 16,
    },
    buttonLabel: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: '#F1F0F2',
    },
})