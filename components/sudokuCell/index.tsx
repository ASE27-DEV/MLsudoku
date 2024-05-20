import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './sudokuCell.style';
import { useLocalSearchParams } from 'expo-router';

interface SudokuCellProps {
  value: number;
  onPress: () => void;
  id: string;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onPress, id }) => {

  return (
    <TouchableOpacity style={id === '1' ? styles.cellMyla : styles.cellLeo} onPress={onPress}>
      <Text style={styles.cellText}>{value !== 0 ? value.toString() : ''}</Text>
    </TouchableOpacity>
  );
};

export default SudokuCell;