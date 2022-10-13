import React, {Dispatch, FC, memo, SetStateAction, useCallback} from "react"
import {Pressable, Text, TextStyle, ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import {palette} from "../../../theme/palette"
import spacing from "../../../theme/spacing"

interface Props {
  section: TSupportedSupermarketsElementSection
  setActiveSection: Dispatch<SetStateAction<TSupportedSupermarketsElementSection>>
  isFocused: boolean
  handleScrollToIndex: () => void
}

const SFButton = (isFocused: boolean): ViewStyle => ({
  marginHorizontal: spacing[0],
  backgroundColor: isFocused ? palette.red : palette.white,
  paddingHorizontal: spacing[1],
  borderRadius: 15,
  paddingVertical: spacing[0] - 2,
})

const SFButtonText = (isFocused: boolean): TextStyle => ({
  fontSize: 14,
  color: isFocused ? palette.white : palette.black,
  fontWeight: "500",
})

type THandleButtonPress = () => void

const SectionsTabBarRenderItem: FC<Props> = ({section, setActiveSection, isFocused, handleScrollToIndex}) => {
  const handleButtonPress: THandleButtonPress = useCallback(() => {
    setActiveSection(section)
    handleScrollToIndex()
  }, [])

  return (
    <Pressable onPress={handleButtonPress} style={SFButton(isFocused)}>
      <Text style={SFButtonText(isFocused)}>{section.title}</Text>
    </Pressable>
  )
}

export default memo(SectionsTabBarRenderItem)
