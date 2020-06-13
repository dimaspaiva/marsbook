import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    width: 300,
    marginBottom: 18,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  body: {
    marginBottom: 300,
  },

  infoContainer: {
    width: 300,
    marginBottom: 21,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoTitle: {
    fontSize: 18,
    color: '#EAEAEA',
    fontFamily: 'Evogria',
  },

  infoValue: {
    fontSize: 18,
    color: '#EAEAEA',
    fontFamily: 'Evogria',
  },

  balance: {
    borderTopWidth: 1.5,
    paddingTop: 6,
    borderTopColor: '#949494',
  },
})

export default styles
