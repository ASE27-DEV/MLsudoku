import React from 'react';
import { View } from 'react-native';
import { styles } from './sudokuGrid.style';
import SudokuCell from '../sudokuCell';
import { SudokuGrid as SudokuGridType } from '../sudokuGenerator';

interface SudokuGridProps {
  puzzle: SudokuGridType;
  onCellChange: (row: number, col: number) => void;
  id: string;
  isValidGrid: boolean[][];
  isModifiedGrid: boolean[][];
}

const SudokuGrid: React.FC<SudokuGridProps> = ({ puzzle, onCellChange, id, isValidGrid, isModifiedGrid }) => {

  const gridStyle = id === '1' ? styles.gridMyla : styles.gridLeo;
  const rowSquareStyle = id === '1' ? styles.rowsquareMyla : styles.rowsquareLeo;

  return (
    <View style={[gridStyle]}>
      {puzzle.map((row, rowIndex) => (
        <View key={rowIndex} style={(rowIndex === 2 || rowIndex === 5) ? rowSquareStyle : styles.row}>
          {row.map((cell, cellIndex) => {
            return (
              <SudokuCell
                key={cellIndex}
                value={cell}
                onPress={() => onCellChange(rowIndex, cellIndex)}
                columnSquare={(cellIndex === 2 || cellIndex === 5)}
                id={id}
                isValid={isValidGrid[rowIndex][cellIndex]}
                isModified={isModifiedGrid[rowIndex][cellIndex]}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default SudokuGrid;
