import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import SudokuGrid from '../../components/sudokuGrid';
import NumberPad from '../../components/numberPad';
import { generateSudokuWithSolution, SudokuGrid as SudokuGridType } from '../../components/sudokuGenerator';
import { styles } from './sudokuGridScreen.style';

interface RouteParams {
  difficulty: string;
  id: string;
  [key: string]: string | string[];
}

const getInitialValidationGrid = (puzzle: SudokuGridType): boolean[][] => {
  return puzzle.map(row => row.map(() => true));  // Initially, all cells are considered valid
};

const getInitialModifiedGrid = (puzzle: SudokuGridType): boolean[][] => {
  return puzzle.map(row => row.map(() => false));  // Initially, no cells are modified
};

export default function SudokuGridScreen() {
  const params = useLocalSearchParams<RouteParams>();

  // Extract difficulty and id, providing default values if undefined
  const difficulty = (params.difficulty && typeof params.difficulty === 'string') ? params.difficulty : 'medium';
  const id = (params.id && typeof params.id === 'string') ? params.id : 'default-id';

  const [puzzle, setPuzzle] = useState<SudokuGridType>([]);
  const [solution, setSolution] = useState<SudokuGridType>([]);
  const [isValidGrid, setIsValidGrid] = useState<boolean[][]>([]);
  const [isModifiedGrid, setIsModifiedGrid] = useState<boolean[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const { puzzle: newPuzzle, solution: newSolution } = generateSudokuWithSolution(difficulty || 'medium');
    setPuzzle(newPuzzle);
    setSolution(newSolution);
    setIsValidGrid(getInitialValidationGrid(newPuzzle));
    setIsModifiedGrid(getInitialModifiedGrid(newPuzzle));
  }, [difficulty]);

  const handleCellChange = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };

  const isGridComplete = (grid: SudokuGridType): boolean => {
    for (const row of grid) {
      if (row.includes(0)) {
        return false;
      }
    }
    return true;
  };

  const handleNumberSelect = (number: number) => {
    if (selectedCell) {
      const { row, col } = selectedCell;
      const newPuzzle = puzzle.map((r, rowIndex) =>
        rowIndex === row ? r.map((c, colIndex) => (colIndex === col ? number : c)) : r
      );
      setPuzzle(newPuzzle);

      const newIsValidGrid = isValidGrid.map((r, rowIndex) =>
        rowIndex === row ? r.map((c, colIndex) => {
          if (colIndex === col) {
            return number === solution[row][col];
          }
          return c;
        }) : r
      );
      setIsValidGrid(newIsValidGrid);

      const newIsModifiedGrid = isModifiedGrid.map((r, rowIndex) =>
        rowIndex === row ? r.map((c, colIndex) => (colIndex === col ? true : c)) : r
      );
      setIsModifiedGrid(newIsModifiedGrid);

      if (isGridComplete(newPuzzle) && newPuzzle.every((row, rowIndex) => row.every((cell, colIndex) => cell === solution[rowIndex][colIndex]))) {
        setShowSuccessMessage(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {puzzle.length > 0 ? (
          <SudokuGrid
            puzzle={puzzle}
            onCellChange={handleCellChange}
            isValidGrid={isValidGrid}
            isModifiedGrid={isModifiedGrid}
            id={id}
          />
        ) : (
          <Image 
            source={require('../../assets/images/narutoKageBunshin.gif')}
            style={styles.loadingImage}
          />
        )}
      </View>
      <View style={styles.numberPadContainer}>
        <NumberPad onSelectNumber={handleNumberSelect} />
      </View>
      {showSuccessMessage && (
        <View style={styles.successMessageContainer}>
          <Image
            source={require('../../assets/images/Sonic.png')}
            style={styles.successImage}
          />
          <Text style={styles.successText}>
            {id === '1' ? 'Bravo Myla, tu as réussi ;) ' : 'Bravo Leo, tu as réussi ;)'}
          </Text>
        </View>
      )}
    </View>
  );
}
