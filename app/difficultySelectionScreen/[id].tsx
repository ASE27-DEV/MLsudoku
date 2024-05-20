import React from 'react';
import { styles } from './difficultySelectionScreen.style';
import { View, TouchableOpacity, Text } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import DifficultyButton from '@/components/difficultyButtonSelection';

const difficulties = [
    { gameId: 1, name: 'Facile', difficulty: 'easy' },
    { gameId: 2, name: 'Moyen', difficulty: 'medium' },
    { gameId: 3, name: 'Difficile', difficulty: 'hard' },
    { gameId: 4, name: 'Expert', difficulty: 'expert' }
];

export default function DifficultySelectionScreen() {
    const params = useLocalSearchParams<{ id: string }>();

    return (
        <View style={params.id === '1' ? styles.containerMyla : styles.containerLeo}>
            {params.id && (
                <>
                    {difficulties.map((item) => (
                        <DifficultyButton key={item.gameId} name={item.name} difficulty={item.difficulty} />
                    ))}
                </>
            )}
        </View>
    );
};