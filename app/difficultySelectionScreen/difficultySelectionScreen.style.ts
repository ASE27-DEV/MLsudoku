import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({

  containerMyla: {
    width: width,
    height: height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
    paddingBottom: 50,
  },

  containerLeo: {
    width: width,
    height: height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
    paddingBottom: 50,
  },

  headerScreenContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%',
  },

  imageDifficulty: {
    width: width/3,
    marginBottom: '5%',
  },

  headerScreenText: {
    fontSize: 40,
  },

});