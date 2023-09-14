import React, {Dispatch, FC, SetStateAction} from "react"
import {ImageStyle, Pressable, TextStyle, useWindowDimensions, ViewStyle} from "react-native"
import {Container, SvgIcon, Text} from "@generalComps"
import {palette, spacing} from "@theme"
import {useItemsContext, useThemeContext} from "@contexts"
import {SupermarketSelectionWidget} from "../supermarket-selection-widget"
import {DarkModeButton} from "../dark-mode"

interface Props {
  setNoActiveItems: Dispatch<SetStateAction<boolean>>
}

const SFIcon = (svgDimension: number): ImageStyle => ({
  width: svgDimension,
  height: svgDimension,
  alignSelf: "center",
  marginTop: spacing[6],
})

const SHeadingText: TextStyle = {
  color: palette.red,
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: spacing[2],
}

const SSubText: TextStyle = {
  alignSelf: "center",
  marginTop: spacing[1],
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

const NoItemsActive: FC<Props> = ({setNoActiveItems}) => {
  const {supermarkets} = useItemsContext()
  const {width} = useWindowDimensions()
  const {colors} = useThemeContext()
  const isDisabled = supermarkets.length <= 0
  const svgDimension = width / 2.3

  const handleRefreshPress = () => {
    setNoActiveItems(false)
  }

  return (
    <Container>
      <SvgIcon iconStyle={SFIcon(svgDimension)} iconString="CryFace" color={colors.svg} />
      <Text style={SHeadingText} text="You are missing out on deals" />
      <Text style={SSubText} text={"Add some supermarkets from our\nsupported list, and when ready\nplease press the refresh button."} />
      <SupermarketSelectionWidget />
      <Pressable disabled={isDisabled} onPress={handleRefreshPress} style={SFRefreshButton(isDisabled)}>
        <Text style={SRefreshButtonText} text="Refresh" />
      </Pressable>
      <DarkModeButton buttonStyle={SDarkModeButton} />
    </Container>
  )
}

export default NoItemsActive