import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import DifficultyButton from '@/components/difficultyButtonSelection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './difficultySelectionScreen.style';

const difficulties = [
    { gameId: 1, name: 'Facile', difficulty: 'easy' },
    { gameId: 2, name: 'Moyen', difficulty: 'medium' },
    { gameId: 3, name: 'Difficile', difficulty: 'hard' },
    { gameId: 4, name: 'Expert', difficulty: 'expert' }
];

export default function DifficultySelectionScreen() {

    const params = useLocalSearchParams<{ id: string, playerName: string }>();
    const id = params.id!;
    const playerName = params.playerName!;
    const router = useRouter();
    const [hasSavedGame, setHasSavedGame] = useState(false);

    useEffect(() => {
        const checkSavedGame = async () => {
          const savedGame = await AsyncStorage.getItem('@sudoku_game');
          setHasSavedGame(!!savedGame);
        };
    
        checkSavedGame();
      }, []);

      const handlePress = (difficulty: string) => {
        router.push({
            pathname: `/sudokuGridScreen/${difficulty}`,
            params: { id, playerName },
        });
    };

    const handleResume = () => {
        router.push({
            pathname: `/sudokuGridScreen/saved`,
            params: { id, playerName },
        });
    };

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
                        <DifficultyButton key={item.gameId} name={item.name} difficulty={item.difficulty} id={id} onPress={() => handlePress(item.difficulty)} />
                    ))}
                    {hasSavedGame && (
                        <Button title="Reprendre la partie en cours" onPress={handleResume} />
                    )}
                </>
            )}
        </View>
    );
};
