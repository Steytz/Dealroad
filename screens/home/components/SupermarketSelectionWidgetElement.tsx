import React, {FC, memo, useCallback} from "react"
import {Switch, TextStyle, View, ViewStyle} from "react-native"
import updateArrayItem from "../../../utils/async-storage/updateArrayItem"
import {palette} from "../../../theme/palette"
import SvgIcon from "../../../global-components/icon/SvgIcon"
import {TSupportedSupermarketsElementLogo} from "../supportedSupermarkets"
import {useSupermarketsContext} from "../../../contexts/SupermarketsContext"
import Text from "../../../global-components/Text/Text"
import {useThemeContext} from "../../../contexts/ThemeContext"
import spacing from "../../../theme/spacing"

interface Props {
  logo: TSupportedSupermarketsElementLogo
  displayName: string
  activeInStore?: boolean
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

type TToggleSwitch = () => void

const SupermarketSelectionWidgetElement: FC<Props> = ({
  logo: {
    logoName,
    dimensions: [width, height],
  },
  displayName,
  activeInStore,
}) => {
  const {setSupermarkets} = useSupermarketsContext()
  const {colors} = useThemeContext()

  const toggleSwitch: TToggleSwitch = useCallback(() => {
    updateArrayItem("supermarkets", displayName, !activeInStore ? "add" : "remove")
    setSupermarkets(prev => {
      return !activeInStore ? [...prev, displayName] : prev.filter(item => item != displayName)
    })
  }, [activeInStore, displayName])

  return (
    <View style={SContainer}>
      <View style={SNameLogoContainer}>
        <SvgIcon iconString={logoName} iconStyle={{width, height, marginRight: 14}} />
        <Text style={SDisplayName} text={displayName} />
      </View>
      <Switch
        trackColor={{false: colors.switchTrackOff, true: colors.switchTrackOn}}
        thumbColor={"#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={activeInStore}
      />
    </View>
  )
}

export default memo(SupermarketSelectionWidgetElement)
