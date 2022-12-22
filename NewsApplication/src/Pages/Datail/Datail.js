import React from 'react';
import { WebView } from 'react-native-webview';
import Lottie from 'lottie-react-native';

const Datail = (props) => {
    const { item } = props.route.params;
    return (
        item ? (
            <WebView source={{ uri: item.readMoreUrl }} />
        ) : (
            <Lottie
                source={require('../../Components/Lottie/error.json')}
                autoPlay
                loop
            />
        )
    )
}

export default Datail;