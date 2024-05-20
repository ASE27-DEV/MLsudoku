import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    grid: {
      borderWidth: 0,
      borderColor: 'pink',
    },
    row: {
      width: width/1,
      height: height/15,
      flexDirection: 'row',
    },
    frame: {
      borderWidth: 3,
      borderColor: 'black',
    },

  });