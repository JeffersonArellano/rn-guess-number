import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    width: '60%',
    flex: 1,
  },
  listContainerBig: {
    flex: 1,
    width: '80%',
  },
  list: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  listItem: {
    borderColor: '#CCC',
    padding: 15,
    marginVertical: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
});
