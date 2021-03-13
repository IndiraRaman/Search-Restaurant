/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/Screen/SearchScreens'
import ResultsShowScreen from './src/Screen/ResultsShowScreen'

const navigator = createStackNavigator(
{
   Search: SearchScreen,
   ResultsShow : ResultsShowScreen
},
{
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title:'Business Search'
    }
})

export default createAppContainer(navigator);