import React, {FC, memo} from "react"
import {ScrollView, Text, TextStyle, View, ViewStyle} from "react-native"
import {palette} from "../../../theme/palette"
import DarkModeToggle from "./DarkModeToggle"
import SupermarketSelectionWidget from "./SupermarketSelectionWidget"

interface Props {}

const SContainer: ViewStyle = {}

const SDivider: ViewStyle = {
  backgroundColor: palette.red,
  height: 3,
  flexDirection: "row",
}

const SSupportedSupermarketsContainer: ViewStyle = {
  marginTop: 21,
  marginHorizontal: 14,
}

const SSupportedSupermarketsText: TextStyle = {
  fontSize: 16,
  color: palette.black,
  fontWeight: "bold",
}

const SettingsTab: FC<Props> = ({}) => {
  return (
    <ScrollView style={SContainer}>
      <DarkModeToggle />
      <View style={SDivider} />

      <View style={SSupportedSupermarketsContainer}>
        <Text style={SSupportedSupermarketsText}>Toggle Supported Supermarkets</Text>
        <SupermarketSelectionWidget />
      </View>
    </ScrollView>
  )
}

export default memo(SettingsTab)
