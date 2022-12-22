import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './CategoriCard-Styles';

const CategoriCard = ({ onPress, label, categori, value }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            testID='categori-card-press'
            style={[styles.btnNormalContainer, categori === value && styles.btnPressContainer]}
        >
            <Text
                testID='categori-card-label'
                style={[styles.btnNormal, categori === value && styles.btnPress]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoriCard;