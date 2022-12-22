import { StyleSheet } from "react-native";


export default StyleSheet.create({
    allcontainer: {
        //borderWidth: 1,
        marginTop: 10,
        maxWidth: 375,
        marginHorizontal: 5,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        marginLeft: 10,
        backgroundColor: '#e0e0e0'
    },
    image: {
        //width: Dimensions.get('screen').width,
        maxWidth: 352,
        height: 270,
        resizeMode: "contain",
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'flex-end'
    },
    title: {
        paddingHorizontal: 10,
        color: '#fff',
        fontSize: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        fontFamily: 'ChakraPetch-MediumItalic'
    },
    content: {
        paddingHorizontal: 5,
        fontFamily: 'ChakraPetch-Bold',
        color: '#000'
    },
    author: {
        color: 'red',
        alignSelf: 'flex-end',
        paddingHorizontal: 5,
        fontFamily: 'ChakraPetch-Bold',
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    date: {
        fontFamily: 'CourierPrime-Bold',
        color: '#000',
        fontSize:15
    },
    time: {
        fontFamily: 'CourierPrime-Bold',
        color: '#000',
        fontSize:15
    },
})