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
    height: 100,
  },

  companieContainer: {
    paddingTop: 6,
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
    fontSize: 15,
    color: '#EAEAEA',
    fontFamily: 'Evogria',
    textAlign: 'center',
  },

  companieSelected: {
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: '#9966FF',
  },
})

export default styles
