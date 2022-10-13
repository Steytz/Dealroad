import React, {Dispatch, FC, SetStateAction} from "react"
import {ImageStyle, Pressable, TextStyle, useWindowDimensions, ViewStyle} from "react-native"
import SupermarketSelectionWidget from "./SupermarketSelectionWidget"
import {useSupermarketsContext} from "../../../contexts/SupermarketsContext"
import SvgIcon from "../../../global-components/icon/SvgIcon"
import {palette} from "../../../theme/palette"
import Container from "../../../global-components/Container/Container"
import {useThemeContext} from "../../../contexts/ThemeContext"
import Text from "../../../global-components/Text/Text"
import DarkModeButton from "./DarkModeButton"
import spacing from "../../../theme/spacing"

interface Props {
  setIsNoSupermarketComponentActive: Dispatch<SetStateAction<boolean>>
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

const NoSupermarkets: FC<Props> = ({setIsNoSupermarketComponentActive}) => {
  const {supermarkets} = useSupermarketsContext()
  const {width} = useWindowDimensions()
  const {colors} = useThemeContext()
  const isDisabled = supermarkets.length <= 0
  const svgDimension = width / 2.3

  const handleRefreshPress = () => {
    setIsNoSupermarketComponentActive(false)
  }

  return (
    <Container>
      <SvgIcon iconStyle={SFIcon(svgDimension)} iconString="CryFace" color={colors.svg} />
      <Text style={SHeadingText} text="You are missing out on deals" />
      <Text
        style={SSubText}
        text={
          "Add some supermarkets from our\nsupported list, and when ready\nplease press the refresh button."
        }
      />
      <SupermarketSelectionWidget />
      <Pressable disabled={isDisabled} onPress={handleRefreshPress} style={SFRefreshButton(isDisabled)}>
        <Text style={SRefreshButtonText} text="Refresh" />
      </Pressable>
      <DarkModeButton buttonStyle={SDarkModeButton} />
    </Container>
  )
}

export default NoSupermarkets
