import React, {FC} from "react"
import {Text as RNText, TextStyle} from "react-native"
import {TTheme} from "@theme"
import {useThemeContext} from "@contexts"

interface Props {
  style?: TextStyle
  text: string
}

const SFText = (colors: TTheme, styleOverride?: TextStyle): TextStyle => ({
  fontSize: 16,
  color: colors.text,
  ...styleOverride,
})

const Text: FC<Props> = ({text, style}) => {
  const {colors} = useThemeContext()
  return <RNText style={SFText(colors, style)}>{text}</RNText>
}

export default Text
