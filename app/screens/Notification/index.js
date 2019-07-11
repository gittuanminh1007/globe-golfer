import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'

import Theme from '../../res/Theme'
import Strings from '../../res/Strings'

import DGText from '../../components/DGText'

export default class Notification extends PureComponent {
  static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.container}>
        <DGText>Notification</DGText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})