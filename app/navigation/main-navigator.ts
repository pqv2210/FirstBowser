// Copyright (c) 2019-present LVT, Personal. All Rights Reserved.
import {createStackNavigator} from 'react-navigation'
import {LoginScreen} from '../screens/login-screen'
import {MainScreen} from '../screens/main-screen'
import {DetailScreen} from '../screens/detail-screen'

export const MainNavigator = createStackNavigator({
  login: {screen: LoginScreen},
  main: {screen: MainScreen},
  detail: {screen: DetailScreen},
},
{
  headerMode: 'none',
  initialRouteName: 'login',
})
