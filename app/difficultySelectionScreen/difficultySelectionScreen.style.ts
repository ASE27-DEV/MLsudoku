import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({

  containerMyla: {
    width: width,
    height: height/1.2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightpink',
    alignContent: 'center',
  },

  containerLeo: {
    width: width,
    height: height/1.2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    alignContent: 'center',
  },

});