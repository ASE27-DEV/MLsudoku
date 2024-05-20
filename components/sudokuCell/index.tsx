import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './sudokuCell.style';

interface SudokuCellProps {
  value: number;
  onPress: () => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.cellText}>{value !== 0 ? value.toString() : ''}</Text>
    </TouchableOpacity>
  );
};

export default SudokuCell;