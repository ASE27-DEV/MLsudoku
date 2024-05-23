import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen');

const isTablet = width > 600;

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
    height: height/2.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%',
  },

  imageDifficulty: {
    width: isTablet ? width/3 : width/2.7,
    height: isTablet ? height/2.7 : height/3.7,
    marginBottom: '5%',
  },

  headerScreenText: {
    fontSize: 40,
    textAlign: 'center',
  },

});