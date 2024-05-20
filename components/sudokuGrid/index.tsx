import React from 'react';
import { View } from 'react-native';
import { styles } from './sudokuGrid.style'
import SudokuCell from '../sudokuCell';
import { SudokuGrid as SudokuGridType } from '../sudokuGenerator'

interface SudokuGridProps {
  puzzle: SudokuGridType;
  onCellChange: (row: number, col: number) => void;
}

const SudokuGrid: React.FC<SudokuGridProps> = ({ puzzle, onCellChange }) => {
  return (
    <View style={styles.grid}>
      {puzzle.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <SudokuCell
            key={cellIndex}
            value={cell}
            onPress={() => onCellChange(rowIndex, cellIndex)}
          />
          ))}
        </View>
      ))}
    </View>
  );
};

export default SudokuGrid;