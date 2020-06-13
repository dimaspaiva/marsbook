import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    width: 300,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  returnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  returnText: {
    fontSize: 15,
    fontFamily: 'Evogria',
    color: '#FF6666',
  },

  walletText: {
    fontSize: 15,
    fontFamily: 'Evogria',
    color: '#9966FF',
  },

  rocketsList: {
    height: 390,
    marginBottom: 30,
  },

  rocketContainer: {
    height: 90,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rocketLogo: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 100,
    backgroundColor: '#EAEAEA',
  },

  rocketHeader: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rocketName: {
    width: 160,
    fontSize: 18,
    fontFamily: 'Evogria',
    color: '#9966FF',
  },

  rocketTicketContainer: {
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rocketTickets: {
    fontSize: 15,
    marginRight: 9,
    fontFamily: 'Evogria',
    color: '#EAEAEA',
  },

  rocketInfo: {
    fontSize: 15,
    fontFamily: 'Evogria',
    color: '#949494',
  },

  rocketFooter: {
    width: 210,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rocketNoteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rocketNote: {
    fontSize: 15,
    fontFamily: 'Evogria',
    color: '#EAEAEA',
  },

  rocketPrice: {
    fontSize: 18,
    textAlign: 'right',
    fontFamily: 'Evogria',
    color: '#EAEAEA',
  },
})

export default styles
