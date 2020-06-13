import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 45,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    flex: 1,
    fontSize: 18,
    color: '#EAEAEA',
    textAlign: 'center',
    fontFamily: 'Evogria',
  },

  icon: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
