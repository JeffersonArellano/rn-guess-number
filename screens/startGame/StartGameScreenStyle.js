import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    // width: Dimensions.get('window').width / 3,
    margin: 5,
  },
  input: {
    width: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    margin: 4,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
