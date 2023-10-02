import React, {Dispatch, FC, SetStateAction, useCallback} from "react"
import {Pressable, TextStyle, useWindowDimensions, ViewStyle} from "react-native"
import {Container, Text} from "@generalComps"
import {palette, spacing} from "@theme"
import {SupermarketSelectionWidget} from "../supermarket-selection-widget"
import {DarkModeButton} from "../dark-mode"
import LottieView from "lottie-react-native"
import {helloAnimation} from "@assets"

interface Props {
  setHasAppBeenOpened: Dispatch<SetStateAction<boolean | undefined>>
}

const SWelcomeHeader: TextStyle = {
  color: palette.orange,
  fontWeight: "bold",
  fontSize: 24,
  marginTop: spacing[4],
}
const SWelcomeSubText: TextStyle = {
  fontSize: 18,
  marginTop: spacing[1],
  fontStyle: "italic",
}
const SDoneBtn: ViewStyle = {
  backgroundColor: palette.orange,
  alignSelf: "center",
  paddingHorizontal: 35,
  paddingVertical: spacing[0],
  borderRadius: 15,
  marginTop: spacing[3],
}
const SDoneBtnText: TextStyle = {
  color: palette.black,
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
  marginTop: spacing[2],
})

const AppFirstOpenWelcome: FC<Props> = ({setHasAppBeenOpened}) => {
  const {width} = useWindowDimensions()
  const animationSize = width / 1.8

  const handleDonePress = useCallback(() => {
    setHasAppBeenOpened(true)
  }, [])

  return (
    <Container>
      <Text style={SWelcomeHeader} text={"Welcome to Dealroad,\nnever buy expensive\nagain."} />
      <Text
        style={SWelcomeSubText}
        text={
          "Please add some supermarkets from\nour supported list by pressing the switch. After active use the checkbox to allow dealroad to implement it's optimizations on the given supported supermarket"
        }
      />
      <SupermarketSelectionWidget />
      <Pressable onPress={handleDonePress} style={SDoneBtn}>
        <Text style={SDoneBtnText} text="Continue" />
      </Pressable>
      <LottieView resizeMode="contain" style={SFAnimation(animationSize)} source={helloAnimation} autoPlay loop speed={0.4} />

      <DarkModeButton buttonStyle={SDarkModeButton} />
    </Container>
  )
}

export default AppFirstOpenWelcome
