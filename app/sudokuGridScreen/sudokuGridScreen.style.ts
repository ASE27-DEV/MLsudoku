import { Dimensions, StyleSheet } from 'react-native'

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  gridContainer: {
    flex: 1,
    marginTop: '10%',
  },

  loadingText: {
    fontSize: 100,
  },

  numberPadContainer: {
    maxWidth: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: 40,
  },

  successMessageContainer: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    right: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },

  successImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },

  successText: {
    fontSize: 40,
    textAlign: 'center',
  },

});