import React, {FC, memo, RefObject} from "react"
import {View, TextInput, ViewStyle, TextStyle} from "react-native"
import {palette, spacing} from "@theme"
import {CustomItemModalLabelWithError} from "./CustomItemModalLabelWithError"

interface Props {
  labelText: string
  ref?: RefObject<TextInput>
  maxLength: number
  placeHolderText: string
  textInputValue: string
  onChangeHandler: (text: string) => void
  error?: string
}

const SAddModalInputContainer: ViewStyle = {
  flex: 1,
}

const STextInput: TextStyle = {
  borderBottomWidth: 1,
  fontSize: 14,
  padding: 5,
  marginVertical: spacing[0],
  color: palette.black,
}

export const CustomItemModalInput: FC<Props> = memo(({labelText, maxLength, placeHolderText, textInputValue, onChangeHandler, error}) => {
  return (
    <View style={SAddModalInputContainer}>
      <CustomItemModalLabelWithError labelText={labelText} error={error} />
      <TextInput maxLength={maxLength} placeholder={placeHolderText} placeholderTextColor={palette.black} value={textInputValue} onChangeText={onChangeHandler} style={STextInput} />
    </View>
  )
})
