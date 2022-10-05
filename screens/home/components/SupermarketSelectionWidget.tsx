import React, {FC} from "react"
import {View, ViewStyle} from "react-native"
import supportedSupermarkets from "../supportedSupermarkets"
import SupermarketSelectionWidgetElement from "./SupermarketSelectionWidgetElement"

interface Props {}

const SContainer: ViewStyle = {
  marginTop: 21,
}

const SupermarketSelectionWidget: FC<Props> = ({}) => {
  return (
    <View style={SContainer}>
      {Object.values(supportedSupermarkets).map((supermarket, index) => (
        <SupermarketSelectionWidgetElement
          key={index}
          logo={supermarket.logo}
          displayName={supermarket.displayName}
        />
      ))}
    </View>
  )
}

export default SupermarketSelectionWidget
