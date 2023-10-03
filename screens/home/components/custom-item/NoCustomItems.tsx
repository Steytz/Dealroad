import React, {FC} from "react"
import {ImageStyle, TextStyle, useWindowDimensions, View, ViewStyle} from "react-native"
import {Text} from "@generalComps"
import {spacing} from "@theme"
import LottieView from "lottie-react-native"
import {emptyBoxAnimation} from "@assets"

interface Props {}

const SContainer: ViewStyle = {
  marginTop: spacing[2],
  alignItems: "center",
}

const SFAnimation = (size: number): ViewStyle => ({
  width: size,
  height: size,
  alignSelf: "center",
})

const SText: TextStyle = {
  textAlign: "center",
  marginBottom: spacing[2],
  fontStyle: "italic",
}

const NoCustomItems: FC<Props> = ({}) => {
  const {width} = useWindowDimensions()
  const animationSize = width / 1.8

  return (
    <View style={SContainer}>
      <Text text="It seems as if there are no custom deals pages present, feel free to press the plus icon on top or this animation to add some" style={SText} />
      <LottieView resizeMode="contain" style={SFAnimation(animationSize)} source={emptyBoxAnimation} autoPlay loop speed={0.4} />
    </View>
  )
}

export default NoCustomItems
