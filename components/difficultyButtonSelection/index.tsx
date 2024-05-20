import React from 'react';
import { styles } from './difficultyButtonSelection.style';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { router } from 'expo-router';

interface DifficultyButtonProps {
    name: string;
    difficulty: string;
    id: string;
}

// Mapping des chemins des images en fonction de la difficulté
const imageSources: { [key: string]: any } = {
    easy: require('../../assets/images/emojiEasy.png'),
    medium: require('../../assets/images/emojiMedium.png'),
    hard: require('../../assets/images/emojiHard.png'),
    expert: require('../../assets/images/emojiExpert.png'),
    default: require('../../assets/images/default.png') // Image fallback
};

const DifficultyButton: React.FC<DifficultyButtonProps> = ({ name, difficulty, id }) => (
    <TouchableOpacity
        onPress={() => {
            router.push({
                pathname: `/sudokuGridScreen/[difficulty]`,
                params: { difficulty: difficulty, id: id }
            });
        }}
    >
        <View style={styles.difficultySelectionView}>
            <Image source={imageSources[difficulty] || imageSources.default} style={styles.image} />
            <Text style={styles.difficultyTextButton}>{name}</Text>
        </View>
    </TouchableOpacity>
);

export default DifficultyButton;