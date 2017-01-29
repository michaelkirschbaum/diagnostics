import {StyleSheet, Platform} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundPrimary,
    },
    sceneContainer: {
        flex: 1,
        // marginBottom: TAB_BAR_HEIGHT
    },
    // appHeader: stylesMain.appHeader
    navHeader: {
        backgroundColor: colors.backgroundSecondary
    },
    navHeaderText: {
        flex: 1,
        fontSize: 20,
        fontWeight: '500',
        color: colors.textNavigation,
        textAlign: Platform.OS === 'ios' ? 'center' : 'center',
    },
    h1: {
        fontSize: 20,
        color: colors.textPrimary,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: colors.textPrimary,
    },
    instructions: {
        textAlign: 'center',
        color: colors.textSecondary,
        marginBottom: 5,
    },
    centered: {
        flex: 1,
        alignSelf: 'center'
    }
});
export default styles;