import React, {FC} from "react"
import {View, ViewStyle} from "react-native"
import {spacing, TTheme} from "@theme"
import {useThemeContext} from "@contexts"

interface Props {
  children: React.ReactNode
  style?: ViewStyle
}

const SFContainer = (colors: TTheme, styleOverride?: ViewStyle): ViewStyle => ({
  paddingHorizontal: spacing[1],
  backgroundColor: colors.container,
  flex: 1,
  ...styleOverride,
})

const Container: FC<Props> = ({children, style}) => {
  const {colors} = useThemeContext()
  return <View style={SFContainer(colors, style)}>{children}</View>
}

export default Container
