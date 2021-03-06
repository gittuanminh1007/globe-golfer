import React, { PureComponent } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

export default class BaseComponent extends PureComponent {
  render() {
    return (
      <ImageBackground 
        style={styles.baseContainer}
        resizeMode='repeat'
        resizeMethod='resize'
        source={require('../res/images/bg.jpg')}
        >
        {this.props.children}
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    width: '100%',
    height: '100%'
  }
})