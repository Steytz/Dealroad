import React, {FC} from "react"
import {Switch, Text, TextStyle, View, ViewStyle} from "react-native"
import {palette} from "../../../theme/palette"

interface Props {}

const SContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 14,
  paddingVertical: 21,
}

const SText: TextStyle = {
  fontSize: 16,
  color: palette.black,
  fontWeight: "bold",
}

const DarkModeToggle: FC<Props> = ({}) => {
  return (
    <View style={SContainer}>
      <Text style={SText}>Toggle Dark Mode</Text>
      <Switch
        trackColor={{false: "#767577", true: palette.black}}
        thumbColor={"#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={null}
        value={null}
      />
    </View>
  )
}

export default DarkModeToggle
