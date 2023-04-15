import { StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';


const styles = StyleSheet.create ({

    Text: {
        ...GlobalStyles.Text,
        color: '#000000',
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 16,
    },
    surface: {
      padding: 8,
      height: '25%',
      width: '90%',
      // alignItems: 'center',
      // justifyContent: 'center',
      borderRadius: 24,
      backgroundColor: '#FFFFFF',
      color: '#FF0000',
      display: 'flex',

    },
    header: {
      display: 'flex',

    },
    symptomBox: {
      width:'100%',
      height: '100%'
    }
})
export default styles
