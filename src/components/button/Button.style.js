const { StyleSheet } = require('react-native')

const btnBackground = '#FF0000'
const textColor = '#FFF'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: btnBackground,
    color: textColor,
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

export default styles
