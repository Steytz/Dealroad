import React, {FC} from "react"
import {ImageStyle, View} from "react-native"
import VectorImage from "react-native-vector-image"
import {getIcon, TIconString} from "./getIcon"

interface Props {
  iconStyle?: ImageStyle
  iconString: TIconString
  color?: string
}

const SFIcon = (iconStyleOverride?: ImageStyle): ImageStyle => ({
  width: 20,
  height: 20,
  resizeMode: "cover",
  ...iconStyleOverride,
})

const SvgIcon: FC<Props> = ({iconStyle, iconString, color}) => {
  // @ts-ignore
  return <VectorImage tintColor={color} style={SFIcon(iconStyle)} source={getIcon(iconString)} />
}

export default SvgIcon
