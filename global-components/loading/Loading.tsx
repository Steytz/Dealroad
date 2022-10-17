import React, {FC} from "react"
import LottieView, {AnimationObject} from "lottie-react-native"
import {ViewStyle} from "react-native"
import {useThemeContext} from "../../contexts/ThemeContext"
import {TTheme} from "../../theme/theme"

interface Props {
  loadingItemName: TLoadingSource
  style?: ViewStyle
}

type TLoadingSource = "price-tag" | "cart"
type TGetLoadingSource = (name: TLoadingSource) => string | AnimationObject | {uri: string}

const getLoadingSource: TGetLoadingSource = name => {
  switch (name) {
    case "price-tag":
      return require("../../assets/lottie/price-tag.json")
    case "cart":
      return require("../../assets/lottie/supermarket-cart.json")
  }
}

const SFLoading = (colors: TTheme, styleOverride?: ViewStyle): ViewStyle => ({
  backgroundColor: colors.loading,
  ...styleOverride,
})

const Loading: FC<Props> = ({style, loadingItemName}) => {
  const {colors} = useThemeContext()
  return (
    <LottieView style={SFLoading(colors, style)} source={getLoadingSource(loadingItemName)} autoPlay loop />
  )
}

export default Loading
