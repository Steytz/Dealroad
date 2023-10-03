import React, {FC, memo} from "react"
import {View, Pressable, ViewStyle, TextStyle, ImageStyle} from "react-native"
import {spacing} from "@theme"
import {SvgIcon, Text} from "@generalComps"
import {useNavigation} from "@react-navigation/native"

interface Props {}

const SModalHeaderContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing[0],
  borderBottomWidth: 2,
  padding: spacing[1],
}

const SModalHeader: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
}

const SFModalCloseBtn = ({pressed}: {pressed: boolean}): ViewStyle => ({
  opacity: pressed ? 0.1 : 1,
})

const SCloseIconSize: ImageStyle = {
  width: 35,
  height: 35,
}

export const CustomItemModalHeader: FC<Props> = memo(({}) => {
  const navigation = useNavigation()

  return (
    <View style={SModalHeaderContainer}>
      <Text style={SModalHeader} text="Custom Item Creation" />
      <Pressable style={SFModalCloseBtn} onPress={navigation.goBack}>
        <SvgIcon iconStyle={SCloseIconSize} iconString="CloseCircle" />
      </Pressable>
    </View>
  )
})
