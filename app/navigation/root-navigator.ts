// Copyright (c) 2019-present LVT, Personal. All Rights Reserved.
import {createStackNavigator} from 'react-navigation'
import {MainNavigator} from './main-navigator'

export const RootNavigator = createStackNavigator(
  {
    MainStack: {screen: MainNavigator},
  },
  {
    headerMode: 'none',
    initialRouteName: 'MainStack',
    navigationOptions: {gesturesEnabled: false},
  },
)
