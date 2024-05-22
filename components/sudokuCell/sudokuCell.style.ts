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
      position: 'relative',
      zIndex: 5,
      width: 40,
      borderWidth: 3,
      borderColor: 'green',
      borderRadius: 15,
    },
    invalidCell: {
      position: 'relative',
      zIndex: 5,
      width: 40,
      borderWidth: 3,
      borderColor: 'red',
      borderRadius: 15,
    },

  });