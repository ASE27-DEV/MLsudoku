import { Dimensions, StyleSheet } from 'react-native'


export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    cellMyla: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: 'pink',
      backgroundColor: 'white',
    },

    cellLeo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: 'blue',
      backgroundColor: 'white',
    },

    cellText: {
      fontSize: 40,
      textAlign: 'center',
    },
  });