import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: 300,
    height: 42,
    backgroundColor: '#EAEAEA',
    borderRadius: 4,
    marginBottom: 30,
  },

  mainTitle: {
    flex: 1,
    padding: 10,
    fontFamily: 'Evogria',
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#94949460',
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionsModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30303090',
  },

  optionsTitle: {
    width: 300,
    backgroundColor: '#EAEAEA',
    fontSize: 15,
    padding: 6,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontFamily: 'Evogria',
    color: '#949494',
  },

  optionsContainer: {
    marginTop: 54,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowColor: '#949494',
    height: 210,
    width: 300,
    borderRadius: 4,
    backgroundColor: '#eaeaea',
  },

  itemContainer: {},

  itemLabel: {
    fontSize: 15,
    padding: 6,
    fontFamily: 'Evogria',
    color: '#949494',
  },
})

export default styles
