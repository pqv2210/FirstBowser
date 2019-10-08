// Copyright (c) 2019-present LVT, Personal. All Rights Reserved.
import * as React from 'react'
import {observer} from 'mobx-react'
import {Dimensions, TextStyle, Image, View, ViewStyle, Text, TouchableOpacity, CheckBox, TextInput} from 'react-native'
import {Screen} from '../../components/screen'
import {NavigationScreenProps} from 'react-navigation'
import {Wallpaper} from '../../components/wallpaper'

const {height, width} = Dimensions.get('screen')
const ROOT: ViewStyle = {
  width,
  height,
  alignItems: 'center',
}
const LOGO: TextStyle = {
  width: 96,
  height: 79,
  marginVertical: height / 11,
}
const BODY: TextStyle = {
  width: 319,
  height: 349,
  alignItems: 'center',
}
const PATH_LOGO: TextStyle = {
  marginBottom: height / 20,
}
const BOX: TextStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
const ICON_PHONE: TextStyle = {
  width: 15,
  height: 19,
  margin: 5,
}
const ICON_PASS: TextStyle = {
  width: 16,
  height: 18,
  margin: 5,
}
const TEXTINPUT: TextStyle = {
  height: height / 14,
  width: width / 1.5,
  fontSize: 18,
}
const LINE: TextStyle = {
  width: width / 1.38,
}
const VIEW_REMEMBER: TextStyle = {
  flexDirection: 'row',
  alignItems: 'center',
}
const TEXT_REMEMBER: TextStyle = {
  fontSize: 15,
}
const TOUCH_FORGOT: TextStyle = {
  alignSelf: 'flex-end',
  marginRight: width / 12,
  marginTop: 10,
}
const TEXT_FORGOT: TextStyle = {
  fontSize: 15,
  color: '#f53559',
}
const TOUCH_LOGIN: TextStyle = {
  backgroundColor: '#2778ff',
  width: width / 2.5,
  height: height / 13,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 30,
  marginTop: height / 16,
}
const TEXT_LOGIN: TextStyle = {
  fontSize: 20,
  color: '#ffffff',
}
const TOUCH_SINGUP: TextStyle = {
  marginTop: height / 20,
}
const TEXT_SIGNUP: TextStyle = {
  fontSize: 18,
  color: '#2778ff',
}

export interface LoginScreenProps extends NavigationScreenProps<{}> {
}

export const LoginScreen: React.FunctionComponent<LoginScreenProps> = observer((props) => {
  const nextScreen = React.useMemo(() => () => props.navigation.navigate('main'), [
    props.navigation,
  ])

  return (
    <Screen
      style={ROOT}
      preset='scroll'
    >
      <Wallpaper backgroundImage={require('./images/BACKGROUND.png')}/>
      <Image
        source={require('./images/origami-bird.png')}
        style={LOGO}
      />
      <View style={BODY}>
        <Wallpaper backgroundImage={require('./images/Path.png')}/>
        <Image
          source={require('./images/User.png')}
          style={PATH_LOGO}
        />
        <View style={BOX}>
          <Image
            style={ICON_PHONE}
            source={require('./images/Email.png')}
          />
          <TextInput
            placeholder='Email Address'
            style={TEXTINPUT}
            returnKeyType='next'
            clearButtonMode='always'
          />
        </View>
        <Image
          source={require('./images/Line.png')}
          style={LINE}
        />
        <View style={BOX}>
          <Image
            style={ICON_PASS}
            source={require('./images/Pass.png')}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={TEXTINPUT}
            returnKeyType='next'
            clearButtonMode='always'
          />
        </View>
        <Image
          source={require('./images/Line.png')}
          style={LINE}
        />
        <View style={VIEW_REMEMBER}>
          <CheckBox/>
          <Text style={TEXT_REMEMBER}>Remember Password</Text>
        </View>
        <TouchableOpacity
          style={TOUCH_FORGOT}
        >
          <Text style={TEXT_FORGOT}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={TOUCH_LOGIN}
          onPress={nextScreen}
        >
          <Text style={TEXT_LOGIN}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={TOUCH_SINGUP}
      >
        <Text style={TEXT_SIGNUP}>Sign up</Text>
      </TouchableOpacity>
    </Screen>
  )
})