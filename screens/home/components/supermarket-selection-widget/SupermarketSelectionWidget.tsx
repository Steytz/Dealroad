import React, {FC, memo} from "react"
import {View, ViewStyle} from "react-native"
import {spacing} from "@theme"
import {useSupermarketsContext} from "@contexts"
import supportedSupermarkets from "../../supportedSupermarkets"
import SupermarketSelectionWidgetElement from "./SupermarketSelectionWidgetElement"

interface Props {}

const SContainer: ViewStyle = {
  marginTop: spacing[2],
}

const SupermarketSelectionWidget: FC<Props> = ({}) => {
  const {supermarkets} = useSupermarketsContext()
  return (
    <View style={SContainer}>
      {Object.values(supportedSupermarkets).map((supermarket, index) => (
        <SupermarketSelectionWidgetElement
          key={index}
          logo={supermarket.logo}
          displayName={supermarket.displayName}
          activeInStore={supermarkets.includes(supermarket.displayName)}
        />
      ))}
    </View>
  )
}

export default memo(SupermarketSelectionWidget)
