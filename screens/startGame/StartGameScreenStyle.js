import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
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
