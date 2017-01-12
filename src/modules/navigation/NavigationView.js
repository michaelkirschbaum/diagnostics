import React, {PropTypes} from 'react';
import {
    Platform,
    NavigationExperimental,
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader,
    PropTypes: NavigationPropTypes
} = NavigationExperimental;
import AppRouter from '../AppRouter';
import TabBar from '../../components/TabBar';
import stylesMain from '../../config/styles';

// const styles = stylesMain;

// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 30;

const NavigationView = React.createClass({
    propTypes: {
        onNavigateBack: PropTypes.func.isRequired,
        onNavigateCompleted: PropTypes.func.isRequired,
        navigationState: PropTypes.shape({
            tabs: PropTypes.shape({
                routes: PropTypes.arrayOf(PropTypes.shape({
                    key: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired
                })).isRequired
            }).isRequired,
            HomeTab: NavigationPropTypes.navigationState.isRequired,
            ProfileTab: NavigationPropTypes.navigationState.isRequired
        }),
        switchTab: PropTypes.func.isRequired,
        pushRoute: PropTypes.func.isRequired
    },
    // NavigationHeader accepts a prop style
    // NavigationHeader.title accepts a prop textStyle
    renderHeader(sceneProps) {
        let showHeader = true; // TODO Needs to be put to state.
        if (showHeader) {
            return (
                <NavigationHeader
                    {...sceneProps}
                    onNavigateBack={this.props.onNavigateBack}
                    style={stylesMain.navHeader}
                    renderTitleComponent={() => {
                        return (
                            <NavigationHeader.Title textStyle={stylesMain.navHeaderText}>
                                {sceneProps.scene.route.title}
                            </NavigationHeader.Title>
                        );
                    }}
                />
            );
        }
    },
    renderScene(sceneProps) {
        // render scene and apply padding to cover
        // for app bar and navigation bar
        return (
            <View style={styles.sceneContainer}>
                {AppRouter(sceneProps)}
            </View>
        );
    },
    render() {
        const {tabs} = this.props.navigationState;
        const tabKey = tabs.routes[tabs.index].key;
        const scenes = this.props.navigationState[tabKey];
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}
                    backgroundColor = 'gray'
                />
                <NavigationCardStack
                    key={'stack_' + tabKey}
                    onNavigateBack={this.props.onNavigateBack}
                    navigationState={scenes}
                    renderHeader={this.renderHeader}
                    renderScene={this.renderScene}
                />
                {/*<TabBar*/}
                {/*height={TAB_BAR_HEIGHT}*/}
                {/*tabs={tabs}*/}
                {/*currentTabIndex={tabs.index}*/}
                {/*switchTab={this.props.switchTab}*/}
                {/*/>*/}
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sceneContainer: {
        flex: 1,
        // marginBottom: TAB_BAR_HEIGHT
    }
});

export default NavigationView;
