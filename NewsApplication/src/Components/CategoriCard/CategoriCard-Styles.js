import { StyleSheet } from "react-native";

export default StyleSheet.create({
    btnNormalContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius:5
    },
    btnPressContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius:5
    },
    btnNormal: {
        color: '#000',
        fontSize:15,
        fontFamily: 'CourierPrime-Bold'
    },
    btnPress: {
        color: 'red',
        fontSize:15,
        fontFamily: 'CourierPrime-Bold'
    }
})