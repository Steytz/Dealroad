import React, {FC, useCallback} from "react"
import {ImageStyle, Pressable, ViewStyle} from "react-native"
import {handleDarkModeToggle, useThemeContext} from "@contexts"
import {TTheme} from "@theme"
import {SvgIcon, TIconString} from "@generalComps"
import {setItem} from "@utils"

interface Props {
  buttonStyle?: ViewStyle
}

const SFButton = (pressed: boolean, colors: TTheme, styleOverride?: ViewStyle): ViewStyle => ({
  borderWidth: 2,
  borderColor: colors.darkModeButtonBorder,
  borderRadius: 10,
  padding: 4,
  backgroundColor: colors.darkModeButton,
  opacity: pressed ? 0.8 : 1,
  ...styleOverride,
})

const SIconStyle: ImageStyle = {
  width: 30,
  height: 30,
}

const DarkModeButton: FC<Props> = ({buttonStyle}) => {
  const {mode, setMode, colors} = useThemeContext()
  const iconString: TIconString = mode === "light" ? "DarkMode" : "LightMode"

  const handlePress = useCallback(() => {
    handleDarkModeToggle(mode, setMode, setItem)
  }, [mode])

  return (
    <Pressable style={({pressed}) => SFButton(pressed, colors, buttonStyle)} onPress={handlePress}>
      <SvgIcon iconStyle={SIconStyle} iconString={iconString} color={colors.svg} />
    </Pressable>
  )
}

export default DarkModeButton
