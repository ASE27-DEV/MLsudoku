import React from 'react';
import { styles } from './difficultyButtonSelection.style';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { router } from 'expo-router';

interface DifficultyButtonProps {
    name: string;
    difficulty: string;
    id: string;
    onPress: () => void;
}

// Mapping des chemins des images en fonction de la difficulté
const imageSources: { [key: string]: any } = {
    easy: require('../../assets/images/emojiEasy.png'),
    medium: require('../../assets/images/emojiMedium.png'),
    hard: require('../../assets/images/emojiHard.png'),
    expert: require('../../assets/images/emojiExpert.png'),
    default: require('../../assets/images/default.png') // Image fallback
};

// Mapping des couleurs de bordure en fonction de la difficulté
const borderStyles: { [key: string]: any } = {
    easy: styles.easyBorder,
    medium: styles.mediumBorder,
    hard: styles.hardBorder,
    expert: styles.expertBorder,
    default: styles.defaultBorder,
  };

const DifficultyButton: React.FC<DifficultyButtonProps> = ({ name, difficulty, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
    >
        <View style={[styles.difficultySelectionView, borderStyles[difficulty] || borderStyles.default]}>
            <Image source={imageSources[difficulty] || imageSources.default} style={styles.image} />
            <Text style={styles.difficultyTextButton}>{name}</Text>
        </View>
    </TouchableOpacity>
);

export default DifficultyButton;