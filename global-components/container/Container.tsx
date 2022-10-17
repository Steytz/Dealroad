import React, {FC} from "react"
import {View, ViewStyle} from "react-native"
import {TTheme} from "../../theme/theme"
import spacing from "../../theme/spacing"
import {useThemeContext} from "../../contexts/ThemeContext"

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
