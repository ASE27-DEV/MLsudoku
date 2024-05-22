import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './numberPad.style'

interface NumberPadProps {
  onSelectNumber: (number: number) => void;
}

const NumberPad: React.FC<NumberPadProps> = ({ onSelectNumber }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <View style={styles.container}>
      {numbers.map((number) => (
        <TouchableOpacity
          key={number}
          style={styles.numberButton}
          onPress={() => onSelectNumber(number)}
        >
          <Text style={styles.numberText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NumberPad;