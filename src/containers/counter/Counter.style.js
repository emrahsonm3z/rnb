const { StyleSheet } = require('react-native')

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  count: {
    fontSize: 50
  },
  countContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
})

export default styles
