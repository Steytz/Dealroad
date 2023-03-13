import React, {FC} from "react"
import {ImageStyle, TextStyle, View, ViewStyle} from "react-native"
import {palette, spacing, TTheme} from "@theme"
import {SvgIcon, Text, TIconString} from "@generalComps"
import {useThemeContext} from "@contexts"

interface Props {
  focused: boolean
  item: string
}

const SFContainer = (colors: TTheme, focused: boolean): ViewStyle => ({
  flexDirection: "row",
  backgroundColor: focused ? colors.supermarketsTabNavigatorChipFocus : colors.supermarketsTabNavigatorChip,
  borderRadius: 15,
  width: 100,
  height: 35,
  justifyContent: "center",
  alignItems: "center",
})

const SFSupermarketName = (focused: boolean): TextStyle => ({
  marginLeft: spacing[0],
  color: focused ? palette.white : palette.black,
  fontWeight: "500",
})

const SFIcon = (svgDimensions: number): ImageStyle => ({
  width: svgDimensions,
  height: svgDimensions,
})

const SupermarketsTabNavigatorChip: FC<Props> = ({focused, item}) => {
  const {colors} = useThemeContext()
  const svgDimensions = item === "Settings" ? 20 : 22
  const settingsColorChange = item === "Settings" && focused ? colors.svg : undefined

  return (
    <View style={SFContainer(colors, focused)}>
      <SvgIcon
        iconString={item as TIconString}
        iconStyle={SFIcon(svgDimensions)}
        color={settingsColorChange}
      />
      <Text style={SFSupermarketName(focused)} text={item} />
    </View>
  )
}

export default SupermarketsTabNavigatorChip
