import React, {FC, memo, useMemo} from "react"
import {Pressable, Switch, TextStyle, View, ViewStyle} from "react-native"
import {SvgIcon, Text} from "@generalComps"
import {palette, spacing} from "@theme"
import {useThemeContext} from "@contexts"
import {TItemsElementLogo} from "../.."
import {CustomItemDeleteButton} from "../custom-item"

interface Props {
  logo: TItemsElementLogo
  displayName: string
  isActiveInStore: boolean
  showOptimize?: boolean
  optimized: boolean
  toggleSwitchCallback: () => void
  toggleOptimizedCallback: () => void
  handleDelete?: () => void
  handleEdit?: () => void
}

const SContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  borderWidth: 2,
  borderRadius: 15,
  borderColor: palette.blue,
  padding: spacing[1],
  marginVertical: 3.5,
  flexWrap: "wrap",
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

const SFOptimizeButton = (pressed: boolean): ViewStyle => ({
  opacity: pressed ? 0.1 : 1,
})

const SFEditButton = (pressed: boolean): ViewStyle => ({
  opacity: pressed ? 0.1 : 1,
  marginHorizontal: spacing[1] - 3,
})

const SSwitch: ViewStyle = {
  marginHorizontal: spacing[0],
}

const ItemSelectionWidgetElement: FC<Props> = ({
  logo: {
    logoName,
    dimensions: [width, height],
  },
  displayName,
  showOptimize,
  isActiveInStore,
  optimized,
  toggleSwitchCallback,
  toggleOptimizedCallback,
  handleDelete,
  handleEdit,
}) => {
  const {colors} = useThemeContext()

  const optimizedIcon = useMemo(() => {
    const color = optimized ? "green" : colors.switchTrackOn
    return <SvgIcon iconString="CheckBox" color={color} iconStyle={{width: 28, height: 28}} />
  }, [optimized])

  return (
    <View style={SContainer}>
      <View style={SNameLogoContainer}>
        <SvgIcon iconString={logoName} iconStyle={{width, height, marginRight: spacing[1]}} />
        <Text style={SDisplayName} text={displayName} />
      </View>
      <View style={STogglesContainer}>
        {showOptimize && (
          <Pressable style={({pressed}) => SFOptimizeButton(pressed)} onPress={toggleOptimizedCallback}>
            {optimizedIcon}
          </Pressable>
        )}
        <Switch
          style={SSwitch}
          trackColor={{false: colors.switchTrackOff, true: colors.switchTrackOn}}
          thumbColor={"#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchCallback}
          value={isActiveInStore}
        />
        {!!handleEdit && (
          <Pressable style={({pressed}) => SFEditButton(pressed)} onPress={handleEdit}>
            <SvgIcon color={colors.svg} iconString="Edit" iconStyle={{width: 26, height: 26}} />
          </Pressable>
        )}
        {!!handleDelete && <CustomItemDeleteButton onDelete={handleDelete} />}
      </View>
    </View>
  )
}

export default memo(ItemSelectionWidgetElement)
