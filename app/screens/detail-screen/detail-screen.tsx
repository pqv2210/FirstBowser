// Copyright (c) 2019-present LVT, Personal. All Rights Reserved.
import * as React from 'react'
import {observer} from 'mobx-react'
import {Dimensions, Image, TextStyle, Text, TouchableOpacity, View, ViewStyle} from 'react-native'
import {Screen} from '../../components/screen'
import {NavigationScreenProps} from 'react-navigation'

const {height, width} = Dimensions.get('screen')
const ROOT: ViewStyle = {
  height,
  width,
}
const BASE_INFO: TextStyle = {
  flexDirection: 'row',
}
const IMG_INFO: TextStyle = {
}
const DETAIL_INFO: TextStyle = {
}
const TEXT_INFO: TextStyle = {
}

export interface DetailScreenProps extends NavigationScreenProps<{}> {
}

export const DetailScreen: React.FunctionComponent<DetailScreenProps> = observer((props) => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])

  const onPress = () => {
    console.log('end')
  }

  return (
    <Screen style={ROOT}>
      <View style={BASE_INFO}>
        <Image
          style={IMG_INFO}
          source={{uri: 'https://placeimg.com/100/100/dog'}}
        />
        <View style={DETAIL_INFO}>
          <Text style={TEXT_INFO}>s</Text>
        </View>
      </View>
    </Screen>
  )
})
