import React, {FC, memo} from "react"
import {ImageStyle, TextStyle, View, ViewStyle} from "react-native"
import {palette, spacing, TTheme} from "@theme"
import {SvgIcon, Text, TIconString} from "@generalComps"
import {useThemeContext} from "@contexts"

interface Props {
  focused: boolean
  name: string
  logo: TIconString
}

const SFContainer = (colors: TTheme, focused: boolean): ViewStyle => ({
  flexDirection: "row",
  backgroundColor: focused ? colors.itemsTabNavigatorChipFocus : colors.itemsTabNavigatorChip,
  borderRadius: 15,
  width: 130,
  height: 35,
  justifyContent: "center",
  alignItems: "center",
})

const SFItemName = (focused: boolean): TextStyle => ({
  marginLeft: spacing[0],
  color: focused ? palette.white : palette.black,
  fontWeight: "500",
})

const SFIcon = (svgDimensions: number): ImageStyle => ({
  width: svgDimensions,
  height: svgDimensions,
})

const ItemsTabNavigatorChip: FC<Props> = ({focused, name, logo}) => {
  const {colors} = useThemeContext()
  const svgDimensions = name === "Settings" ? 20 : 22
  const settingsColorChange = name === "Settings" && focused ? colors.svg : undefined

  return (
    <View style={SFContainer(colors, focused)}>
      <SvgIcon iconString={logo as TIconString} iconStyle={SFIcon(svgDimensions)} color={settingsColorChange} />
      <Text style={SFItemName(focused)} text={name} />
    </View>
  )
}

export default memo(ItemsTabNavigatorChip)
