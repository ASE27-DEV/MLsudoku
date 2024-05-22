import { Dimensions, StyleSheet } from 'react-native'


export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    cellMyla: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'lightpink',
      backgroundColor: 'white',
      
    },

    cellLeo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'lightblue',
      backgroundColor: 'white',
    },

    highlightedColumn: {
      borderRightWidth: 5,
    },

    cellText: {
      fontSize: 40,
      textAlign: 'center',
    },

    validCell: {
      borderWidth: 1,
      borderColor: 'green',
    },
    invalidCell: {
      borderWidth: 1,
      borderColor: 'red',
    },

  });