import React, {FC} from "react"
import {ImageStyle, TextStyle, View, ViewStyle} from "react-native"
import {Text} from "@generalComps"
import {spacing} from "@theme"
import LottieView from "lottie-react-native"
import {emptyBoxAnimation} from "@assets"

interface Props {}

const SContainer: ViewStyle = {
  marginTop: spacing[2],
  alignItems: "center",
}

const SAnimation: ImageStyle = {
  width: "50%",
}

const SText: TextStyle = {
  textAlign: "center",
  marginBottom: spacing[2],
  fontStyle: "italic",
}

const NoCustomItems: FC<Props> = ({}) => {
  return (
    <View style={SContainer}>
      <Text text="It seems as if there are no custom deals pages present, feel free to press the plus icon on top or this animation to add some" style={SText} />
      <LottieView resizeMode="cover" style={SAnimation} source={emptyBoxAnimation} autoPlay loop speed={0.4} />
    </View>
  )
}

export default NoCustomItems
