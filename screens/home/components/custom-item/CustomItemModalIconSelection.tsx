import React, {FC, memo, ReactNode, useMemo} from "react"
import {View, Pressable, ViewStyle, ImageStyle} from "react-native"
import {ConditionalContainer, SvgIcon, TIconString} from "@generalComps"
import {spacing} from "@theme"
import {CustomItemModalLabelWithError} from "./CustomItemModalLabelWithError"
import {TCustomItem} from "@contexts"

interface Props {
  onIconPress: (icon: string) => void
  selectedLogo: TCustomItem["logo"]
  error?: string
}

const SIconSectionContainer: ViewStyle = {
  flex: 1,
  marginTop: spacing[0],
  borderBottomWidth: 2,
  paddingBottom: spacing[2],
}

const SIconSelectionGridContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 7,
}

const SIconWrappingButton: ViewStyle = {
  marginVertical: 5,
  marginHorizontal: 3,
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const SConditionalIconContainer: ViewStyle = {
  borderWidth: 2,
  borderRadius: 50,
  padding: 6,
}

const SIconSize: ImageStyle = {
  width: 32,
  height: 32,
}

const iconSelectionOptionsList: Partial<TIconString>[] = [
  "CustomMarket",
  "CustomMarket2",
  "CustomHammerSale",
  "CustomMarket3",
  "CustomHandSale",
  "CustomShoppingBags",
  "CustomInvoice",
  "CustomCalculator",
  "CustomPayment",
  "CustomCart",
  "CustomPiggy",
  "CustomGiftTruck",
  "CustomSaleTag",
  "CustomToolsRepair",
]

const renderContainerChildren = (children: ReactNode) => <View style={SConditionalIconContainer}>{children}</View>

export const CustomItemModalIconSelection: FC<Props> = memo(({onIconPress, selectedLogo, error}) => {
  const iconSelectionGrid = useMemo(() => {
    return iconSelectionOptionsList.map((icon, index) => (
      <Pressable key={index} onPress={() => onIconPress(icon)} style={SIconWrappingButton}>
        <ConditionalContainer container={renderContainerChildren} condition={selectedLogo === icon} children={<SvgIcon iconString={icon} iconStyle={SIconSize} />} />
      </Pressable>
    ))
  }, [selectedLogo, onIconPress])

  return (
    <View style={SIconSectionContainer}>
      <CustomItemModalLabelWithError labelText="Icon" error={error} />
      <View style={SIconSelectionGridContainer}>{iconSelectionGrid}</View>
    </View>
  )
})
