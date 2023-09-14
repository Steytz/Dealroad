import React, {FC, memo} from "react"
import {ImageStyle, Pressable, TextStyle, View, ViewStyle} from "react-native"
import {palette, spacing} from "@theme"
import {SvgIcon, Text} from "@generalComps"
import {CustomItemDeleteButton} from "./CustomItemDeleteButton"

interface Props {
  onActionHandler: () => void
  isDisabled: boolean
  buttonText: "Save" | "Edit"
  onRemoveHandler: () => void
}

const SFAddModalActionButton = (pressed: boolean, isDisabled: boolean): ViewStyle => ({
  marginTop: spacing[1],
  opacity: isDisabled ? 0.7 : pressed ? 0.1 : 1,
  alignSelf: "flex-end",
  justifyContent: "center",
  flexDirection: "row",
  backgroundColor: isDisabled ? palette.red : palette.green,
  padding: 10,
  borderRadius: 7,
})

const SDeleteActionButton: ViewStyle = {
  marginTop: spacing[1],
  alignSelf: "flex-end",
  justifyContent: "center",
  flexDirection: "row",
  padding: 10,
  borderRadius: 7,
  backgroundColor: palette.white,
}

const SDeleteActionButtonIcon: ImageStyle = {
  width: 20,
  height: 20,
}

const SAddModalActionButtonText: TextStyle = {
  fontSize: 16,
  marginRight: 7,
  includeFontPadding: false,
  color: palette.black,
  fontWeight: "bold",
}

const SAddModalActionButtonIcon: ImageStyle = {
  width: 20,
  height: 20,
}

const SFActionButtonsContainer = (isEditMode: boolean): ViewStyle => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: isEditMode ? "space-between" : "flex-end",
})

export const CustomItemModalActionButtons: FC<Props> = memo(({onActionHandler, isDisabled, buttonText, onRemoveHandler}) => {
  const isEditMode = buttonText === "Edit"
  return (
    <View style={SFActionButtonsContainer(isEditMode)}>
      {isEditMode && <CustomItemDeleteButton onDelete={onRemoveHandler} buttonStyle={SDeleteActionButton} iconStyle={SDeleteActionButtonIcon} />}
      <Pressable disabled={isDisabled} style={({pressed}) => SFAddModalActionButton(pressed, isDisabled)} onPress={onActionHandler}>
        <Text style={SAddModalActionButtonText} text={buttonText} />
        <SvgIcon color={palette.black} iconString="Save" iconStyle={SAddModalActionButtonIcon} />
      </Pressable>
    </View>
  )
})
