// Copyright (c) 2019-present LVT, Personal. All Rights Reserved.
import * as React from 'react'
import {observer} from 'mobx-react'
import {TextStyle, View, Text, Dimensions, TouchableOpacity, Image, FlatList} from 'react-native'
import {NavigationScreenProps} from 'react-navigation'
import {Screen} from '../../components/screen'
import {Wallpaper} from '../../components/wallpaper'

const {width} = Dimensions.get('screen')

const ROOT: TextStyle = {
  flex: 1,
}
const HEADER: TextStyle = {
  width,
  height: 60,
  flexDirection: 'row',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9,
}
const TITLE_HEADER: TextStyle = {
  fontSize: 20,
  color: '#ffffff',
}
const TOUCH_LOGOUT: TextStyle = {
  width: 60,
  height: 60,
  alignItems: 'center',
  justifyContent: 'center',
}
const IMG_LOGOUT: TextStyle = {
  width: 30,
  height: 30,
}
const FLATLIST: TextStyle = {
  flex: 1,
}
const TOUCH_ADD: TextStyle = {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#ff87c8',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 20,
  bottom: 20,
}
const IMG_ADD: TextStyle = {
  width: 55,
  height: 55,
}

export interface MainScreenProps extends NavigationScreenProps<{}> {
}

export const MainScreen: React.FunctionComponent<MainScreenProps> = observer((props) => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])

  const nextScreen = React.useMemo(() => () => props.navigation.navigate('detail'), [
    props.navigation,
  ])

  return (
    <Screen style={ROOT}>
      <View style={HEADER}>
        <Wallpaper
          backgroundImage={require('./Title.png')}
        />
        <TouchableOpacity
          style={TOUCH_LOGOUT}
          onPress={goBack}
        >
          <Image
            style={IMG_LOGOUT}
            source={require('./logout.png')}
          />
        </TouchableOpacity>
        <Text style={TITLE_HEADER}>MeOw</Text>
      </View>
      <FlatList style={FLATLIST}/>
      <TouchableOpacity
        style={TOUCH_ADD}
        onPress={nextScreen}
      >
        <Image
          style={IMG_ADD}
          source={require('./icons8-plus-64.png')}
        />
      </TouchableOpacity>
    </Screen>
  )
})
