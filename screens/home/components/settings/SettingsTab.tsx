import React, {FC, memo} from "react"
import {ScrollView, TextStyle, View, ViewStyle} from "react-native"
import {palette, spacing, TTheme} from "@theme"
import {useThemeContext} from "@contexts"
import {DarkModeToggle} from "../dark-mode"
import {SupermarketSelectionWidget} from "../supermarket-selection-widget"
import {Text} from "@generalComps"
import CustomItemSelection from "../custom-item/CustomItemSelection"

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

const SSupermarketsWidgetContainer: ViewStyle = {
  marginVertical: spacing[2],
  marginHorizontal: spacing[1],
}

const SSupermarketsWidgetText: TextStyle = {
  fontWeight: "bold",
}

const SettingsTab: FC<Props> = ({}) => {
  const {colors} = useThemeContext()

  return (
    <ScrollView style={SFContainer(colors)}>
      <DarkModeToggle />
      <View style={SDivider} />
      <View style={SSupermarketsWidgetContainer}>
        <Text style={SSupermarketsWidgetText} text="Toggle Supported Supermarkets" />
        <SupermarketSelectionWidget />
      </View>
      <View style={SDivider} />
      <View style={SSupermarketsWidgetContainer}>
        <CustomItemSelection />
      </View>
    </ScrollView>
  )
}

export default memo(SettingsTab)
