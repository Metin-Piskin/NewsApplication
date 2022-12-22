import React, { useState } from 'react';
import { View, FlatList, ScrollView, StatusBar } from 'react-native';
import Lottie from 'lottie-react-native';

import styles from './Home-styles';

import cat from '../../Components/Categori.json';
import useFetch from '../../Hook';
import NewCard from '../../Components/NewCard';
import CategoriCard from '../../Components/CategoriCard';
const url = 'https://inshorts.deta.dev/news?category=';

const Home = ({ navigation }) => {
    const [categori, setCategori] = useState('all');
    const { veri, loading, error } = useFetch(url + categori);

    if (loading) {
        return (
            <>
                <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
                <Lottie
                    source={require('../../Components/Lottie/loading.json')}
                    autoPlay
                    loop
                    style={styles.Lottiecontainer}
                    testID='home-page-lottiecontainer'
                />
            </>
        )
    }
    if (error) {
        return (
            <>
                <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
                <Lottie
                    source={require('../../Components/Lottie/error.json')}
                    autoPlay
                    loop
                    style={styles.Lottiecontainer}
                    testID='home-page-lottiecontainer'
                />
            </>
        )
    }

    const selectCategori = value => {
        setCategori(value);
    }

    return (
        <View
            testID='home-page-container'
            style={styles.container}
        >
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <ScrollView horizontal>
                {
                    cat.map(e => {
                        return (
                            <CategoriCard
                                key={e.id}
                                onPress={() => selectCategori(e.value)}
                                label={e.label}
                                categori={categori}
                                value={e.value}
                            />
                        )
                    })
                }
            </ScrollView>
            <FlatList
                data={veri.data}
                renderItem={({ item }) => <NewCard news={item} onPress={() => navigation.navigate('Detail', { item })} />}
            />
        </View>
    )
}

export default Home;