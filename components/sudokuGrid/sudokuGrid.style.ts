import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    gridMyla: {
      borderWidth: 5,
      borderColor: 'lightpink',
    },

    gridLeo: {
      borderWidth: 5,
      borderColor: 'lightblue',
    },

    row: {
      width: width/1.05,
      height: height/15,
      flexDirection: 'row',
    },

    rowsquareMyla: {
      width: width / 1.05,
      height: height / 15,
      flexDirection: 'row',
      borderBottomWidth: 5,
      borderBottomColor: 'lightpink',
    },

    rowsquareLeo: {
      width: width / 1.05,
      height: height / 15,
      flexDirection: 'row',
      borderBottomWidth: 5,
      borderBottomColor: 'lightblue',
    },

  });