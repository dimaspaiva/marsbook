import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import MainButton from '../../components/MainButton'

import styles from './styles'
import global from '../styles-global'

const Rockets = () => {
  return (
    <SafeAreaView style={global.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.returnContainer}>
          <Icon name="chevrons-left" color="#FF6666" size={30} />
          <Text style={styles.returnText}>Return</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.walletText}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <Text style={global.pageTitle}>Select a Rocket to take you to Mars</Text>

      <ScrollView
        style={styles.rocketsList}
        showsVerticalScrollIndicator={false}>
        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>

        <View style={styles.rocketContainer}>
          <View style={styles.rocketLogo} />

          <View>
            <View style={styles.rocketHeader}>
              <Text style={styles.rocketName}>Spaceship name</Text>

              <View style={styles.rocketTicketContainer}>
                <Text style={styles.rocketTickets}>25</Text>
                <Icon name="users" color="#9966FF" size={24} />
              </View>
            </View>

            <Text style={styles.rocketInfo}>AMAZING NON SENSE TEXT</Text>

            <View style={styles.rocketFooter}>
              <View style={styles.rocketNoteContainer}>
                <Icon name="award" color="#9966FF" size={24} />
                <Text style={styles.rocketNote}>5.0</Text>
              </View>
              <Text style={styles.rocketPrice}>R$ 15,000.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <MainButton
        color="#9966FF"
        darkColor="#7C48E4"
        text="Purchase your tickets"
        icon="dollar-sign"
        action={() => {}}
      />
    </SafeAreaView>
  )
}

export default Rockets
