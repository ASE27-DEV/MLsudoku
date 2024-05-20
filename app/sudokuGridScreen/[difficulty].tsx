import React, { useEffect, useState } from 'react';
import { styles } from './sudokuGridScreen.style';
import { View, Text, Modal } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import SudokuGrid from '../../components/sudokuGrid';
import NumberPad from '../../components/numberPad';
import { generateSudoku, SudokuGrid as SudokuGridType } from '../../components/sudokuGenerator';

export default function SudokuGridScreen () {
  
  // Utilisation de useLocalSearchParams sans typage générique
  const params = useLocalSearchParams();

  // Extraire la difficulté des paramètres
  const difficulty = params.difficulty as string | undefined;

  const [puzzle, setPuzzle] = useState<SudokuGridType>([]);

  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
          />
        )}
      </View>
      <View style={styles.numberPadContainer}>
        <NumberPad onSelectNumber={handleNumberSelect} />
      </View>
    </View>
  );
};