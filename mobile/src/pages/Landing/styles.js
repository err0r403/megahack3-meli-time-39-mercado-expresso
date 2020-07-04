import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 15,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        width: '100%',
        minHeight: 90,
        backgroundColor: '#ebc22f',
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '75%',
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 20
    }

});