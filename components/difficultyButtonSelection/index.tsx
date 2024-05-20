import React from 'react';
import { styles } from './difficultyButtonSelection.style';
import { View, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';

interface DifficultyButtonProps {
  name: string;
  difficulty: string;
}

const DifficultyButton: React.FC<DifficultyButtonProps> = ({ name, difficulty }) => (
  <TouchableOpacity
    onPress={() => {
      router.push({
        pathname: `/sudokuGridScreen/[difficulty]`,
        params: { difficulty }
      });
    }}
  >
    <View style={styles.difficultySelectionView}>
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default DifficultyButton;