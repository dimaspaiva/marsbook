import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  body: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infosContainer: {
    width: 270,
    marginTop: 9,
    marginBottom: 21,
  },

  infosText: {
    fontSize: 15,
    fontFamily: 'Evogria',
    color: '#949494',
  },

  companiesList: {
    marginBottom: 40,
  },

  companieContainer: {
    width: 75,
    height: 99,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  companieLogo: {
    width: 50,
    height: 50,
    borderRadius: 9,
    backgroundColor: '#EAEAEA',
  },

  companieName: {
    fontFamily: 'Evogria',
    fontSize: 15,
    color: '#EAEAEA',
    textAlign: 'center',
  },
})

export default styles
