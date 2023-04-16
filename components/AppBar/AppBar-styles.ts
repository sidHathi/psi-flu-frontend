import { StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';


const styles = StyleSheet.create ({
  bottom: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    shadowOpacity: .5,
    // shadowOffset: {width: 200, height: 4}
    shadowRadius: .5
  },
  LeftAction: {
    position: 'absolute',
    right: '55%',
  },
  RightAction: {
    position: 'absolute',
    left: '55%',
  },
})

export default styles