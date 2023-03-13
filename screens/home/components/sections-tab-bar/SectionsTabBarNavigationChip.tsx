import React, {FC, memo} from "react"
import {Text, TextStyle, View, ViewStyle} from "react-native"
import {palette, spacing} from "@theme"

interface Props {
  label: string
  isFocused: boolean
}

const SFContainer = (isFocused: boolean): ViewStyle => ({
  backgroundColor: isFocused ? palette.red : palette.white,
  paddingHorizontal: spacing[1],
  borderRadius: 15,
  paddingVertical: spacing[0],
})

const SFText = (isFocused: boolean): TextStyle => ({
  fontSize: 14,
  color: isFocused ? palette.white : palette.black,
  fontWeight: "500",
})

const SectionsTabBarNavigationChip: FC<Props> = ({label, isFocused}) => {
  return (
    <View style={SFContainer(isFocused)}>
      <Text style={SFText(isFocused)}>{label}</Text>
    </View>
  )
}

export default memo(SectionsTabBarNavigationChip)
