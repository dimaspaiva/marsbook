import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },

  headerContainer: {
    width: 230,
    marginBottom: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerLogo: {
    width: 56,
    height: 75,
  },

  headerSlogan: {
    width: 150,
    fontFamily: 'Evogria',
    color: '#EAEAEA',
    fontSize: 15,
  },

  logoutContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },

  logoutTitle: {
    color: '#FF6666',
    fontFamily: 'Evogria',
    fontSize: 15,
    textAlign: 'center',
  },

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
