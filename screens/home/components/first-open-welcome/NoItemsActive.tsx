import React, {Dispatch, FC, SetStateAction, useCallback, useMemo} from "react"
import {Pressable, ScrollView, TextStyle, useWindowDimensions, ViewStyle} from "react-native"
import {Text} from "@generalComps"
import {palette, spacing, TTheme} from "@theme"
import {useItemsContext, useThemeContext} from "@contexts"
import {SupermarketSelectionWidget} from "../supermarket-selection-widget"
import {DarkModeButton} from "../dark-mode"
import LottieView from "lottie-react-native"
import {sadFaceAnimation} from "@assets"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {TMainStack} from "../../../../navigation/MainNavigator"
import {CustomItemSelectionWidget} from "../custom-item"

interface Props {
  setNoActiveItems: Dispatch<SetStateAction<boolean>>
}

const SFContainer = (colors: TTheme): ViewStyle => ({
  backgroundColor: colors.container,
  flex: 1,
  paddingHorizontal: spacing[0],
})

const SContentContainer: ViewStyle = {
  paddingBottom: spacing[1],
}

const SHeadingText: TextStyle = {
  color: palette.red,
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
}

const SSubText: TextStyle = {
  marginTop: spacing[1],
  fontStyle: "italic",
  fontWeight: "500",
  textAlign: "center",
  paddingHorizontal: spacing[2],
}

const SFRefreshButton = (isDisabled: boolean): ViewStyle => ({
  backgroundColor: palette.blue,
  alignSelf: "center",
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[0],
  borderRadius: 15,
  marginTop: spacing[2],
  opacity: isDisabled ? 0.5 : 1,
})

const SRefreshButtonText: TextStyle = {
  fontSize: 18,
  fontWeight: "500",
}

const SDarkModeButton: ViewStyle = {
  position: "absolute",
  top: 20,
  right: 20,
}

const SFAnimation = (size: number): ViewStyle => ({
  width: size,
  height: size,
  alignSelf: "center",
})

const SFCustomItemCreationButton = (pressed: boolean): ViewStyle => ({
  marginTop: spacing[1],
  opacity: pressed ? 0.1 : 1,
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[3],
  borderRadius: 15,
  backgroundColor: palette.green,
  alignSelf: "center",
})

const SCustomItemCreationButtonText: TextStyle = {
  fontWeight: "bold",
}

const SItemWidgetLabel: TextStyle = {
  marginTop: spacing[2],
  paddingHorizontal: spacing[0],
  fontSize: 18,
  fontWeight: "bold",
  color: palette.blue,
}

const NoItemsActive: FC<Props> = ({setNoActiveItems}) => {
  const {supermarkets, customItems} = useItemsContext()
  const {width} = useWindowDimensions()
  const {colors} = useThemeContext()
  const hasNoActiveCustomItems = !customItems.some(csItem => csItem.isActive)
  const isDisabled = supermarkets.length <= 0 && hasNoActiveCustomItems
  const navigation = useNavigation<NativeStackNavigationProp<TMainStack>>()
  const animationSize = width / 1.7

  const showCustomItemCreation = useCallback(() => {
    navigation.navigate("CustomItemModal", {})
  }, [navigation])

  const handleRefreshPress = () => {
    setNoActiveItems(false)
  }

  const customItemsRenderFactory = useMemo(() => {
    if (customItems.length) {
      return (
        <>
          <Text style={SItemWidgetLabel} text="Custom Items" />
          <CustomItemSelectionWidget />
        </>
      )
    }
    return null
  }, [customItems.length])

  return (
    <ScrollView contentContainerStyle={SContentContainer} style={SFContainer(colors)}>
      <LottieView resizeMode="cover" style={SFAnimation(animationSize)} source={sadFaceAnimation} autoPlay loop />
      <Text style={SHeadingText} text="You are missing out on deals" />

      <Text
        style={SSubText}
        text={
          "Add some supermarkets from our supported list, alternatively you can create a custom deals page, just press the button under the supported supermarket selection make sure to activate it and when ready please press the refresh button."
        }
      />
      <Text style={SItemWidgetLabel} text="Supported Supermarkets" />
      <SupermarketSelectionWidget />
      {customItemsRenderFactory}
      <Pressable style={({pressed}) => SFCustomItemCreationButton(pressed)} onPress={showCustomItemCreation}>
        <Text style={SCustomItemCreationButtonText} text="Create Custom Item" />
      </Pressable>
      <Pressable disabled={isDisabled} onPress={handleRefreshPress} style={SFRefreshButton(isDisabled)}>
        <Text style={SRefreshButtonText} text="Refresh" />
      </Pressable>
      <DarkModeButton buttonStyle={SDarkModeButton} />
    </ScrollView>
  )
}

export default NoItemsActive
