import React, {FC} from "react"
import {Text, TextStyle, View, ViewStyle} from "react-native"
import {palette} from "../../../theme/palette"
import SvgIcon from "../../../global-components/icon/SvgIcon"
import {TIconString} from "../../../global-components/icon/getIcon"

interface Props {
  focused: boolean
  supermarket: string
}

const SFContainer = (focused: boolean): ViewStyle => ({
  flexDirection: "row",
  backgroundColor: focused ? palette.blue : palette.white,
  borderRadius: 15,
  width: 100,
  height: 35,
  justifyContent: "center",
  alignItems: "center",
})

const SFSupermarketName = (focused: boolean): TextStyle => ({
  marginLeft: 7,
  color: focused ? palette.white : palette.black,
  fontWeight: "500",
  fontSize: 16,
})

const SupermarketsTabNavigatorItem: FC<Props> = ({focused, supermarket}) => {
  const svgDimensions = 22

  return (
    <View style={SFContainer(focused)}>
      <SvgIcon
        iconString={supermarket as TIconString}
        iconStyle={{width: svgDimensions, height: svgDimensions}}
      />
      <Text style={SFSupermarketName(focused)}>{supermarket}</Text>
    </View>
  )
}

export default SupermarketsTabNavigatorItem
