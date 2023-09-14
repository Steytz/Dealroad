import React, {FC, memo} from "react"
import {View, Switch, ViewStyle} from "react-native"
import {Text} from "@generalComps"
import {palette, spacing} from "@theme"

interface Props {
  onSwitchPress: () => void
  switchValue: boolean
}

const SAddModalActivateContainer: ViewStyle = {
  marginTop: spacing[1],
  flexDirection: "row",
}

export const CustomItemModalActivate: FC<Props> = memo(({switchValue, onSwitchPress}) => {
  return (
    <View style={SAddModalActivateContainer}>
      <Text text="Activate in tabs: " />
      <Switch thumbColor={"#fff"} trackColor={{false: palette.red, true: palette.green}} ios_backgroundColor="#3e3e3e" onValueChange={onSwitchPress} value={switchValue} />
    </View>
  )
})
