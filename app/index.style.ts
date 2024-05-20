import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'white',
    },
  
    logo: {
      width: width/1.2,
      height: height/2,
      marginTop: '-1%',
    },
  
    mylaButtonView : {
      zIndex: 2,
      backgroundColor: 'pink',
      minWidth: '50%',
      minHeight: '10%',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  
    userSelectionButton : {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'black',
    },
  
    leoButtonView : {
      zIndex: 2,
      backgroundColor: 'blue',
      minWidth: '50%',
      minHeight: '10%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  });
  