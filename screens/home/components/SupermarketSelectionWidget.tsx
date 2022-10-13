import React, {FC, memo} from "react"
import {View, ViewStyle} from "react-native"
import supportedSupermarkets from "../supportedSupermarkets"
import SupermarketSelectionWidgetElement from "./SupermarketSelectionWidgetElement"
import {useSupermarketsContext} from "../../../contexts/SupermarketsContext"
import spacing from "../../../theme/spacing"

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
