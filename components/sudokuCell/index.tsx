import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './sudokuCell.style';

interface SudokuCellProps {
  value: number;
  onPress: () => void;
  id: string;
  columnSquare: boolean;
  isValid: boolean;
  isModified: boolean;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onPress, id, columnSquare, isValid, isModified }) => {
  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    if (isModified) {
      setShowValidation(true);
      const timer = setTimeout(() => {
        setShowValidation(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isModified, value]);

  return (
    <TouchableOpacity 
      style={[
        id === '1' ? styles.cellMyla : styles.cellLeo,
        columnSquare ? styles.highlightedColumn : null,
        showValidation ? (isValid ? styles.validCell : styles.invalidCell) : null
      ]} 
      onPress={onPress}
    >
      <Text style={styles.cellText}>{value !== 0 ? value.toString() : ''}</Text>
    </TouchableOpacity>
  );
};

export default SudokuCell;
