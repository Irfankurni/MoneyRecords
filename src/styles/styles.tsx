import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 28
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
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
        marginEnd: 16
    },
    profileName: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold'
    },
})