import React, {Dispatch, FC, memo, SetStateAction, useCallback} from "react"
import {Pressable, Switch, TextStyle, View, ViewStyle} from "react-native"
import {SvgIcon, Text} from "@generalComps"
import {palette, spacing, TTheme} from "@theme"
import {useSupermarketsContext, useThemeContext} from "@contexts"
import {TSupportedSupermarketsElementLogo} from "../.."
import {updateArrayItem} from "@utils"

interface Props {
  logo: TSupportedSupermarketsElementLogo
  displayName: string
  activeInStore?: boolean
  optimized: boolean
}

const SContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  borderWidth: 2,
  borderRadius: 15,
  borderColor: palette.blue,
  padding: spacing[1],
  marginVertical: 3.5,
}

const SNameLogoContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const SDisplayName: TextStyle = {
  fontSize: 18,
  fontWeight: "500",
}

const STogglesContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const SFOptimizeButton = (pressed: boolean, colors: TTheme): ViewStyle => ({
  opacity: pressed ? 0.1 : 1,
  marginRight: spacing[1] - 3,
  borderWidth: 1,
  padding: spacing[1] - 4,
  borderRadius: 10,
  borderColor: colors.text,
})

const SOptimizeText: TextStyle = {
  fontSize: 14,
  fontWeight: "bold",
}

type TToggleSwitch = (
  key: string,
  stateCallback: Dispatch<SetStateAction<string[]>>,
  varToTest: boolean | undefined,
) => void

const SupermarketSelectionWidgetElement: FC<Props> = ({
  logo: {
    logoName,
    dimensions: [width, height],
  },
  displayName,
  activeInStore,
  optimized,
}) => {
  const {setSupermarkets, setOptimizedSupermarkets} = useSupermarketsContext()
  const {colors} = useThemeContext()

  const toggleSwitch: TToggleSwitch = useCallback(
    (key, stateCallback, varToTest) => {
      updateArrayItem(key, displayName, !varToTest ? "add" : "remove")
      stateCallback(prev => {
        return !varToTest ? [...prev, displayName] : prev.filter(item => item != displayName)
      })
    },
    [activeInStore, displayName],
  )

  const onSwitchValueChange = useCallback(
    () => toggleSwitch("supermarkets", setSupermarkets, activeInStore),
    [activeInStore],
  )
  const onOptimizedPress = useCallback(
    () => toggleSwitch("optimizedSupermarkets", setOptimizedSupermarkets, optimized),
    [optimized],
  )

  const optimizedText = optimized ? "Stop Optimizing" : "Optimize"

  return (
    <View style={SContainer}>
      <View style={SNameLogoContainer}>
        <SvgIcon iconString={logoName} iconStyle={{width, height, marginRight: spacing[1]}} />
        <Text style={SDisplayName} text={displayName} />
      </View>
      <View style={STogglesContainer}>
        {activeInStore && (
          <Pressable style={({pressed}) => SFOptimizeButton(pressed, colors)} onPress={onOptimizedPress}>
            <Text style={SOptimizeText} text={optimizedText} />
          </Pressable>
        )}
        <Switch
          trackColor={{false: colors.switchTrackOff, true: colors.switchTrackOn}}
          thumbColor={"#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onSwitchValueChange}
          value={activeInStore}
        />
      </View>
    </View>
  )
}

export default memo(SupermarketSelectionWidgetElement)
