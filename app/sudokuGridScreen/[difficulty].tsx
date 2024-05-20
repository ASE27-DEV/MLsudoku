import React, { useEffect, useState } from 'react';
import { styles } from './sudokuGridScreen.style';
import { View, Text, Modal } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import SudokuGrid from '../../components/sudokuGrid';
import NumberPad from '../../components/numberPad';
import { generateSudoku, SudokuGrid as SudokuGridType } from '../../components/sudokuGenerator';

interface RouteParams {
  [key: string]: string | string[]; // index signature to satisfy SearchParams constraint
}

export default function SudokuGridScreen () {

  const params = useLocalSearchParams<RouteParams>();

  // Extract difficulty and id, providing default values if undefined
  const difficulty = (params.difficulty && typeof params.difficulty === 'string') ? params.difficulty : 'medium';
  const id = (params.id && typeof params.id === 'string') ? params.id : 'default-id';

  const [puzzle, setPuzzle] = useState<SudokuGridType>([]);

  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);

  useEffect(() => {
    const newPuzzle = generateSudoku(difficulty || 'medium');
    setPuzzle(newPuzzle);
  }, [difficulty]);

  const handleCellChange = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };

  const handleNumberSelect = (number: number) => {
    if (selectedCell) {
      const { row, col } = selectedCell;
      const newPuzzle = [...puzzle];
      newPuzzle[row][col] = number;
      setPuzzle(newPuzzle);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {puzzle.length > 0 && (
          <SudokuGrid
            puzzle={puzzle}
            onCellChange={handleCellChange}
            id={id}
          />
        )}
      </View>
      <View style={styles.numberPadContainer}>
        <NumberPad onSelectNumber={handleNumberSelect} />
      </View>
    </View>
  );
};