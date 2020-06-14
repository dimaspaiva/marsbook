import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 34,
    paddingBottom: 30,
    paddingTop: 45,
    alignItems: 'center',
  },

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

  pageTitle: {
    fontSize: 24,
    color: '#EAEAEA',
    textAlign: 'center',
    fontFamily: 'Evogria',
  },

  link: {
    fontFamily: 'Evogria',
    color: '#FF6666',
    fontSize: 15,
    margin: 3,
  },

  input: {
    backgroundColor: '#EAEAEA',
    color: '#949494',
    padding: 10,
    borderRadius: 4,
    width: 300,
    height: 42,
    fontFamily: 'Evogria',
  },
})

export default styles
