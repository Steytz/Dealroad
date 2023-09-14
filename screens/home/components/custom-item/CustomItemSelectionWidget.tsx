import React, {Dispatch, FC, SetStateAction} from "react"
import {Alert, View, ViewStyle} from "react-native"
import SupermarketSelectionWidgetElement from "../supermarket-selection-widget/ItemSelectionWidgetElement"
import {spacing} from "@theme"
import {TCustomItem, useItemsContext} from "@contexts"
import {updateObjectArrayItem, updateSimpleArrayItem} from "@utils"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {TMainStack} from "../../../../navigation/MainNavigator"

interface Props {}

const SContainer: ViewStyle = {
  marginTop: spacing[0],
}

const toggleOptimizedSwitchCallback = (varToTest: boolean, displayName: string, stateCallback: Dispatch<SetStateAction<string[]>>) => {
  updateSimpleArrayItem("optimizedItems", displayName, !varToTest ? "add" : "remove")
  stateCallback(prev => {
    return !varToTest ? [...prev, displayName] : prev.filter(item => item !== displayName)
  })
}

const toggleActiveSwitchCallback = async (customItem: TCustomItem, stateCallback: Dispatch<SetStateAction<TCustomItem[]>>) => {
  const updatedCustomItem: TCustomItem = {...customItem, isActive: !customItem.isActive}

  await updateObjectArrayItem({
    keyToUpdate: "customItems",
    itemForOperation: updatedCustomItem,
    mode: "update",
    identifier: "id",
  })

  stateCallback(prev => {
    const updatedArr = [...prev]
    const itemIndex = updatedArr.findIndex(item => item.id === customItem.id)

    if (itemIndex === -1) return prev

    updatedArr.splice(itemIndex, 1, updatedCustomItem)
    return updatedArr
  })
}

const handleEditCallback = (customItemToEdit: TCustomItem, navigation: NativeStackNavigationProp<TMainStack>) => {
  return navigation.navigate("CustomItemModal", {customItemToEdit})
}

export const handleDeleteCallback = (itemToRemove: TCustomItem, stateCallback: Dispatch<SetStateAction<TCustomItem[]>>, navigation?: NativeStackNavigationProp<TMainStack>) => {
  const onDeletePress = async () => {
    await updateObjectArrayItem({
      keyToUpdate: "customItems",
      itemForOperation: itemToRemove,
      mode: "remove",
      identifier: "id",
    })

    stateCallback(prev => {
      return prev.filter(item => item.id !== itemToRemove.id)
    })

    if (navigation) navigation.goBack()
  }

  const alertTitle = `Are you sure you want to delete ${itemToRemove.displayName}?`
  const alertBody = "By selecting yes, this item will be completely removed from the device. If you do not want this consider just disabling it via the switch"

  Alert.alert(
    alertTitle,
    alertBody,
    [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: onDeletePress,
      },
    ],
    {cancelable: true},
  )
}

export const CustomItemSelectionWidget: FC<Props> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<TMainStack>>()
  const {customItems, optimizedItems, setOptimizedItems, setCustomItems} = useItemsContext()

  return (
    <View style={SContainer}>
      {customItems.map((customItem, index) => {
        const logoName = customItem.logo ? customItem.logo : "CustomMarket"
        const hasOptimizedSections = customItem.sections.some(section => section.selectorsToRemove)

        return (
          <SupermarketSelectionWidgetElement
            key={index + customItem.displayName}
            logo={{logoName, dimensions: [28, 28]}}
            displayName={customItem.displayName}
            isActiveInStore={customItem.isActive}
            showOptimize={customItem.isActive && hasOptimizedSections}
            optimized={optimizedItems.includes(customItem.displayName)}
            toggleSwitchCallback={() => toggleActiveSwitchCallback(customItem, setCustomItems)}
            toggleOptimizedCallback={() => toggleOptimizedSwitchCallback(optimizedItems.includes(customItem.displayName), customItem.displayName, setOptimizedItems)}
            handleDelete={() => handleDeleteCallback(customItem, setCustomItems)}
            handleEdit={() => handleEditCallback(customItem, navigation)}
          />
        )
      })}
    </View>
  )
}
