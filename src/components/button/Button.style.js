const { StyleSheet } = require('react-native')

const btnBackground = '#FF0000'
const textColor = '#FFFFFF'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: btnBackground,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  buttonLabel: {
    color: textColor,
    fontWeight: 'bold',
    marginHorizontal: 10
  }
})

export default styles
