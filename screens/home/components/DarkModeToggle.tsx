import React, {FC, useCallback} from "react"
import {Switch, TextStyle, View, ViewStyle} from "react-native"
import {handleDarkModeToggle, useThemeContext} from "../../../contexts/ThemeContext"
import Text from "../../../global-components/text/Text"
import {setItem} from "../../../utils/async-storage/setItem"
import spacing from "../../../theme/spacing"

interface Props {}

const SContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: spacing[1],
  paddingVertical: spacing[2],
}

const SText: TextStyle = {
  fontWeight: "bold",
}

const DarkModeToggle: FC<Props> = ({}) => {
  const {mode, setMode, colors} = useThemeContext()

  const isDarkMode = mode === "dark"

  const handleSwitch = useCallback(() => {
    handleDarkModeToggle(mode, setMode, setItem)
  }, [mode])

  return (
    <View style={SContainer}>
      <Text style={SText} text="Toggle Dark Mode" />
      <Switch
        trackColor={{false: colors.switchTrackOff, true: colors.switchTrackOn}}
        thumbColor={"#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleSwitch}
        value={isDarkMode}
      />
    </View>
  )
}

export default DarkModeToggle
