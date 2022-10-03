import React, {Dispatch, FC, SetStateAction} from "react"
import {View, ViewStyle} from "react-native"
import supportedSupermarkets from "../supportedSupermarkets"
import SupermarketSelectionWidgetElement from "./SupermarketSelectionWidgetElement"

interface Props {
  setSupermarkets: Dispatch<SetStateAction<string[]>>
}

const SContainer: ViewStyle = {
  marginTop: 21,
}

const SupermarketSelectionWidget: FC<Props> = ({setSupermarkets}) => {
  return (
    <View style={SContainer}>
      {Object.values(supportedSupermarkets).map((supermarket, index) => (
        <SupermarketSelectionWidgetElement
          key={index}
          logo={supermarket.logo}
          displayName={supermarket.displayName}
          setSupermarkets={setSupermarkets}
        />
      ))}
    </View>
  )
}

export default SupermarketSelectionWidget
