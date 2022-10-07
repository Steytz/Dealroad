import React, {Dispatch, FC, memo, SetStateAction} from "react"
import {Pressable, Text, TextStyle, ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import {palette} from "../../../theme/palette"

interface Props {
  section: TSupportedSupermarketsElementSection
  setActiveSection: Dispatch<SetStateAction<TSupportedSupermarketsElementSection>>
  isFocused: boolean
  handleScrollToIndex: () => void
}

const SFButton = (isFocused: boolean): ViewStyle => ({
  marginHorizontal: 7,
  borderWidth: 1.5,
  backgroundColor: isFocused ? palette.blue : "white",
  paddingHorizontal: 14,
  borderRadius: 15,
  paddingVertical: 4,
})

const SFButtonText = (isFocused: boolean): TextStyle => ({
  fontSize: 14,
  color: isFocused ? palette.white : palette.black,
  fontWeight: "500",
})

type THandleButtonPress = () => void

const SectionsTabBarRenderItem: FC<Props> = ({section, setActiveSection, isFocused, handleScrollToIndex}) => {
  const handleButtonPress: THandleButtonPress = () => {
    setActiveSection(section)
    handleScrollToIndex()
  }

  return (
    <Pressable onPress={handleButtonPress} style={SFButton(isFocused)}>
      <Text style={SFButtonText(isFocused)}>{section.title}</Text>
    </Pressable>
  )
}

export default memo(SectionsTabBarRenderItem)
