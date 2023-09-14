import React, {FC} from "react"
import {View, TextStyle, ViewStyle} from "react-native"
import {Text} from "@generalComps"
import {palette} from "@theme"

interface Props {
  labelText: string
  error?: string
}

const SLabelContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const SLabelErrorText: TextStyle = {
  color: palette.red,
  fontWeight: "bold",
  fontSize: 12,
}

export const CustomItemModalLabelWithError: FC<Props> = ({error, labelText}) => {
  return (
    <View style={SLabelContainer}>
      <Text text={labelText} />
      {error && <Text style={SLabelErrorText} text={"  " + error} />}
    </View>
  )
}
