import React, {Dispatch, FC, SetStateAction, useState} from "react"
import {Switch, Text, TextStyle, View, ViewStyle} from "react-native"
import updateArrayItem from "../../../utils/async-storage/updateArrayItem"
import {palette} from "../../../theme/palette"
import SvgIcon from "../../../global-components/icon/SvgIcon"
import {TSupportedSupermarketsElementLogo} from "../supportedSupermarkets"

interface Props {
  logo: TSupportedSupermarketsElementLogo
  displayName: string
  setSupermarkets: Dispatch<SetStateAction<string[]>>
}

const SContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  borderWidth: 2,
  borderRadius: 15,
  borderColor: palette.blue,
  padding: 14,
  marginVertical: 3.5,
}

const SNameLogoContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const SDisplayName: TextStyle = {
  color: palette.black,
  fontSize: 18,
  fontWeight: "500",
}

const SupermarketSelectionWidgetElement: FC<Props> = ({
  logo: {
    logoName,
    dimensions: [width, height],
  },
  displayName,
  setSupermarkets,
}) => {
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
        <SvgIcon iconString={logoName} iconStyle={{width, height, marginRight: 14}} />
        <Text style={SDisplayName}>{displayName}</Text>
      </View>
      <Switch
        trackColor={{false: "#767577", true: palette.black}}
        thumbColor={"#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch(!isEnabled, displayName)}
        value={isEnabled}
      />
    </View>
  )
}

export default SupermarketSelectionWidgetElement
