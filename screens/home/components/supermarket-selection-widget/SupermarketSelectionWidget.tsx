import React, {Dispatch, FC, memo, SetStateAction} from "react"
import {View, ViewStyle} from "react-native"
import {spacing} from "@theme"
import {useItemsContext} from "@contexts"
import supportedSupermarkets from "../../supportedSupermarkets"
import SupermarketSelectionWidgetElement from "./ItemSelectionWidgetElement"
import {updateSimpleArrayItem} from "@utils"

interface Props {}

type TToggleSwitch = (key: string, stateCallback: Dispatch<SetStateAction<string[]>>, varToTest: boolean | undefined, displayName: string) => void

const SContainer: ViewStyle = {
  marginTop: spacing[2],
}

const toggleSwitchCallback: TToggleSwitch = (key, stateCallback, varToTest, displayName) => {
  updateSimpleArrayItem(key, displayName, !varToTest ? "add" : "remove")
  stateCallback(prev => {
    return !varToTest ? [...prev, displayName] : prev.filter(item => item !== displayName)
  })
}

const SupermarketSelectionWidget: FC<Props> = ({}) => {
  const {supermarkets, setSupermarkets, optimizedItems, setOptimizedItems} = useItemsContext()

  return (
    <View style={SContainer}>
      {Object.values(supportedSupermarkets).map((supermarket, index) => (
        <SupermarketSelectionWidgetElement
          key={index}
          logo={supermarket.logo}
          displayName={supermarket.displayName}
          isActiveInStore={supermarkets.includes(supermarket.displayName)}
          showOptimize={supermarkets.includes(supermarket.displayName)}
          optimized={optimizedItems.includes(supermarket.displayName)}
          toggleSwitchCallback={() => toggleSwitchCallback("supermarkets", setSupermarkets, supermarkets.includes(supermarket.displayName), supermarket.displayName)}
          toggleOptimizedCallback={() => toggleSwitchCallback("optimizedItems", setOptimizedItems, optimizedItems.includes(supermarket.displayName), supermarket.displayName)}
        />
      ))}
    </View>
  )
}

export default memo(SupermarketSelectionWidget)
