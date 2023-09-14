import React, {FC, memo, useMemo} from "react"
import {View, Pressable, ViewStyle, TextStyle, ImageStyle} from "react-native"
import {SvgIcon, Text} from "@generalComps"
import {palette, spacing} from "@theme"
import {TItemsElementSection} from "@screens"
import {TCustomItem} from "@contexts"
import {CustomItemModalInput} from "./CustomItemModalInput"
import {CustomItemModalLabelWithError} from "./CustomItemModalLabelWithError"

interface Props {
  isMoreThanOneSection: boolean
  sections: TCustomItem["sections"]
  setSectionTextInputValue: (keyToModify: keyof TItemsElementSection, text: string, sectionIndex: number) => void
  addSectionHandler: () => void
  removeSectionHandler: (sectionIndex: number) => void
  error?: string
}

const sectionsKeysConfigs = [
  {placeholder: "Please input a short section title max 6 chars", maxLength: 10},
  {placeholder: "Please input the section url", maxLength: 9999},
  {
    placeholder: "#onetrust-banner-sdk, .n-header-root",
    maxLength: 9999,
  },
]

export const defaultSection: TItemsElementSection = {
  title: "",
  url: "",
  selectorsToRemove: "",
}

const SSectionsContainer: ViewStyle = {
  flex: 1,
  marginTop: spacing[2],
  borderBottomWidth: 2,
}

const SSectionsInnerContainer: ViewStyle = {
  marginTop: spacing[1],
}

const SSectionItemContainer: ViewStyle = {
  borderWidth: 2,
  borderRadius: 10,
  paddingHorizontal: spacing[0],
  paddingVertical: spacing[1],
  marginBottom: spacing[1],
}

const SSectionSubTitle: TextStyle = {
  fontWeight: "bold",
  fontSize: 13,
  position: "absolute",
  top: 7,
  right: 14,
}

const SFRemoveButton = ({pressed}: {pressed: boolean}): ViewStyle => ({
  marginTop: spacing[0],
  opacity: pressed ? 0.1 : 1,
  alignSelf: "flex-end",
  marginRight: spacing[0],
  borderWidth: 2,
  borderRadius: 50,
  borderColor: palette.red,
  padding: 5,
})

const SRemoveIcon: ImageStyle = {
  width: 20,
  height: 20,
}

const SFAddButton = (pressed: boolean, isDisabled: boolean): ViewStyle => ({
  marginTop: spacing[0],
  marginBottom: spacing[1],
  opacity: isDisabled ? 0.6 : pressed ? 0.1 : 1,
  alignSelf: "center",
})

const SAddIcon: ImageStyle = {
  width: 40,
  height: 40,
}

export const CustomItemModalSections: FC<Props> = memo(({isMoreThanOneSection, sections, setSectionTextInputValue, removeSectionHandler, addSectionHandler, error}) => {
  const sectionForms = useMemo(() => {
    return sections.map((newSection, sectionIndex) => {
      return (
        <View style={SSectionItemContainer} key={sectionIndex}>
          {isMoreThanOneSection && <Text style={SSectionSubTitle} text={`${sectionIndex + 1}`} />}
          {Object.entries(newSection).map(([key, value], subIndex) => (
            <CustomItemModalInput
              key={`${key}${subIndex}`}
              labelText={key}
              maxLength={sectionsKeysConfigs[subIndex].maxLength}
              placeHolderText={sectionsKeysConfigs[subIndex].placeholder}
              textInputValue={value}
              onChangeHandler={text => setSectionTextInputValue(key as keyof TItemsElementSection, text, sectionIndex)}
            />
          ))}
          {isMoreThanOneSection && (
            <Pressable onPress={() => removeSectionHandler(sectionIndex)} style={SFRemoveButton}>
              <SvgIcon color={palette.red} iconStyle={SRemoveIcon} iconString="Trashcan" />
            </Pressable>
          )}
        </View>
      )
    })
  }, [sections, isMoreThanOneSection, setSectionTextInputValue, removeSectionHandler])

  const labelText = isMoreThanOneSection ? "Sections" : "Item"
  const shouldDisableAddSectionBtn = sections.some(section => !section.title || !section.url)
  return (
    <View style={SSectionsContainer}>
      <CustomItemModalLabelWithError labelText={labelText} error={error} />
      <View style={SSectionsInnerContainer}>
        {sectionForms}
        <Pressable disabled={shouldDisableAddSectionBtn} style={({pressed}) => SFAddButton(pressed, shouldDisableAddSectionBtn)} onPress={addSectionHandler}>
          <SvgIcon color={palette.black} iconString="AddCircle" iconStyle={SAddIcon} />
        </Pressable>
      </View>
    </View>
  )
})
