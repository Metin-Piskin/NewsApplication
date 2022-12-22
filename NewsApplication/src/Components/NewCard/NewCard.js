import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './NewCard-Styles';

const NewCard = ({ news, onPress }) => {
    return (
        <>
            {
                news ? (
                    <TouchableOpacity
                        style={styles.allcontainer}
                        onPress={onPress}
                        testID='new-card-press'
                    >
                        <ImageBackground
                            testID='new-card-imagebackground'
                            style={styles.image}
                            source={{ uri: news.imageUrl }}
                        >
                            <Text
                                style={styles.title}
                                testID='new-card-title'
                            >
                                {news.title}
                            </Text>
                        </ImageBackground>
                        <Text
                            style={styles.content}
                            testID='new-card-content'
                        >
                            {news.content}
                        </Text>
                        <Text
                            style={styles.author}
                            testID='new-card-author'
                        >
                            {news.author}
                        </Text>
                        <View
                            style={styles.innercontainer}
                            testID='new-card-innercontainer'
                        >
                            <Text
                                style={styles.date}
                                testID='new-card-date'
                            >
                                {news.date}
                            </Text>
                            <Text
                                style={styles.time}
                                testID='new-card-time'
                            >
                                {news.time}
                            </Text>
                        </View>
                    </TouchableOpacity>

                ) : (
                    <View>
                        <Text>Null</Text>
                    </View>
                )
            }
        </>
    )
}

export default NewCard;