import React from 'react';
import { styles } from './difficultySelectionScreen.style';
import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import DifficultyButton from '@/components/difficultyButtonSelection';

const difficulties = [
    { gameId: 1, name: 'Facile', difficulty: 'easy'},
    { gameId: 2, name: 'Moyen', difficulty: 'medium'},
    { gameId: 3, name: 'Difficile', difficulty: 'hard'},
    { gameId: 4, name: 'Expert', difficulty: 'expert'}
];

export default function DifficultySelectionScreen() {

    const params = useLocalSearchParams<{ id: string, playerName: string }>();
    const id = params.id!;
    const playerName = params.playerName!;

    return (
        <View style={params.id === '1' ? styles.containerMyla : styles.containerLeo}>
            {params.id && (
                <>
                    <View style={styles.headerScreenContainer}>
                        <Image 
                            source={require('../../assets/images/Knuckles.png')}
                            style={styles.imageDifficulty}
                        />
                        <Text style={styles.headerScreenText}>
                            {playerName}, Choisis ta difficulté :
                        </Text>
                    </View>
                    {difficulties.map((item) => (
                        <DifficultyButton key={item.gameId} name={item.name} difficulty={item.difficulty} id={id}/>
                    ))}
                </>
            )}
        </View>
    );
};