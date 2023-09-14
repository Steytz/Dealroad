import React, {FC} from "react"
import {ImageStyle, Pressable, ViewStyle} from "react-native"
import {SvgIcon} from "@generalComps"
import {palette, spacing} from "@theme"

interface Props {
  onDelete: () => void
  buttonStyle?: ViewStyle
  iconStyle?: ImageStyle
}

const SFRemoveButton = (pressed: boolean, buttonStyleOverwrite?: ViewStyle): ViewStyle => ({
  opacity: pressed ? 0.1 : 1,
  marginHorizontal: spacing[1] - 3,
  ...buttonStyleOverwrite,
})

const SFIcon = (iconStyleOverwrite?: ImageStyle): ImageStyle => ({
  width: 26,
  height: 26,
  ...iconStyleOverwrite,
})

export const CustomItemDeleteButton: FC<Props> = ({onDelete, buttonStyle, iconStyle}) => {
  return (
    <Pressable style={({pressed}) => SFRemoveButton(pressed, buttonStyle)} onPress={onDelete}>
      <SvgIcon color={palette.red} iconString="Trashcan" iconStyle={SFIcon(iconStyle)} />
    </Pressable>
  )
}
