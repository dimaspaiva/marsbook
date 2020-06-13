import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  logoContainerKeyboard: {
    marginBottom: 21,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoKeyboard: {
    width: 120,
    height: 120,
  },

  logoContainer: {
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 264,
    height: 264,
    marginBottom: 12,
  },

  sloganKeyboard: {
    width: 150,
    fontSize: 24,
    color: '#EAEAEA',
    textAlign: 'center',
    fontFamily: 'Evogria',
  },

  slogan: {
    fontSize: 24,
    color: '#EAEAEA',
    textAlign: 'center',
    fontFamily: 'Evogria',
  },

  input: {
    backgroundColor: '#EAEAEA',
    color: '#949494',
    padding: 10,
    marginVertical: 15,
    borderRadius: 4,
    width: 300,
    height: 42,
    fontFamily: 'Evogria',
  },

  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Evogria',
    width: 300,
    marginBottom: 30,
  },

  button: {
    width: 300,
    height: 45,
    borderRadius: 4,
    backgroundColor: '#9966FF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonTitle: {
    flex: 1,
    fontSize: 18,
    color: '#EAEAEA',
    textAlign: 'center',
    fontFamily: 'Evogria',
  },

  buttonIconContainer: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7C48E4',
  },
})

export default styles
