import React, {Dispatch, FC, SetStateAction, useState} from "react"
import {Switch, Text, View, ViewStyle} from "react-native"
import updateArrayItem from "../../../utils/async-storage/updateArrayItem"

interface Props {
  logo: string
  displayName: string
  setSupermarkets: Dispatch<SetStateAction<string[]>>
}

const SContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const SNameLogoContainer: ViewStyle = {}

const SupermarketSelectionWidgetElement: FC<Props> = ({logo, displayName, setSupermarkets}) => {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch: (active: boolean, name: string) => void = async active => {
    await updateArrayItem("supermarkets", displayName, active ? "add" : "remove")
    setIsEnabled(active)
    setSupermarkets(prev => {
      return active ? [...prev, displayName] : prev.filter(item => item != displayName)
    })
  }

  return (
    <View style={SContainer}>
      <View style={SNameLogoContainer}>
        <Text>{logo}</Text>
        <Text>{displayName}</Text>
      </View>
      <Switch
        trackColor={{false: "#767577", true: "#81b0ff"}}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch(!isEnabled, displayName)}
        value={isEnabled}
      />
    </View>
  )
}

export default SupermarketSelectionWidgetElement
