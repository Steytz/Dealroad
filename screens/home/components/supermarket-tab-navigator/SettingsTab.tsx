import React, {FC, memo} from "react"
import {ScrollView, TextStyle, View, ViewStyle} from "react-native"
import {palette, spacing, TTheme} from "@theme"
import {useThemeContext} from "@contexts"
import {DarkModeToggle} from "../dark-mode"
import {SupermarketSelectionWidget} from "../supermarket-selection-widget"
import {Text} from "@generalComps"

interface Props {}

const SFContainer = (colors: TTheme): ViewStyle => ({
  backgroundColor: colors.container,
  flex: 1,
})

const SDivider: ViewStyle = {
  backgroundColor: palette.red,
  height: 3,
  flexDirection: "row",
}

const SSupportedSupermarketsContainer: ViewStyle = {
  marginTop: spacing[2],
  marginHorizontal: spacing[1],
}

const SSupportedSupermarketsText: TextStyle = {
  fontWeight: "bold",
}

const SettingsTab: FC<Props> = ({}) => {
  const {colors} = useThemeContext()

  return (
    <ScrollView style={SFContainer(colors)}>
      <DarkModeToggle />
      <View style={SDivider} />

      <View style={SSupportedSupermarketsContainer}>
        <Text style={SSupportedSupermarketsText} text="Toggle Supported Supermarkets" />
        <SupermarketSelectionWidget />
      </View>
    </ScrollView>
  )
}

export default memo(SettingsTab)
