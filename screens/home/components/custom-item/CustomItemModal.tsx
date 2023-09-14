import React, {FC} from "react"
import {View, ViewStyle} from "react-native"
import {palette, spacing} from "@theme"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {CustomItemModalHeader} from "./CustomItemModalHeader"
import {CustomItemModalInput} from "./CustomItemModalInput"
import {CustomItemModalIconSelection} from "./CustomItemModalIconSelection"
import {CustomItemModalSections} from "./CustomItemModalSections"
import {CustomItemModalActivate} from "./CustomItemModalActivate"
import {CustomItemModalActionButtons} from "./CustomItemModalActionButtons"
import {handleDeleteCallback} from "./CustomItemSelectionWidget"
import {useCustomItemCreation} from "./useCustomItemCreation"

const SInnerKeyboardViewContainer: ViewStyle = {
  flex: 1,
  padding: spacing[1],
}

const SModalContainer: ViewStyle = {
  marginTop: spacing[4],
  backgroundColor: palette.blue,
  width: "90%",
  height: "90%",
  borderRadius: 15,
  alignSelf: "center",
}

export const CustomItemModal: FC = () => {
  const {
    newCustomItem,
    setCustomItems,
    handleShowErrors,
    setCustomItemValue,
    setSectionTextInputValue,
    addNewSection,
    removeSection,
    shouldDisableActionButton,
    actionBtnHandler,
    actionBtnText,
    navigation,
  } = useCustomItemCreation()

  return (
    <View style={SModalContainer}>
      <CustomItemModalHeader />
      <KeyboardAwareScrollView enableAutomaticScroll={true} enableOnAndroid={true}>
        <View style={SInnerKeyboardViewContainer}>
          <CustomItemModalInput
            labelText="Display Name"
            maxLength={10}
            placeHolderText="Please input a short name max 6 chars"
            textInputValue={newCustomItem.displayName}
            onChangeHandler={text => setCustomItemValue("displayName", text)}
            error={handleShowErrors("displayName")}
          />
          <CustomItemModalIconSelection onIconPress={icon => setCustomItemValue("logo", icon)} selectedLogo={newCustomItem?.logo} error={handleShowErrors("logo")} />
          <CustomItemModalSections
            isMoreThanOneSection={newCustomItem.sections.length > 1}
            sections={newCustomItem?.sections}
            setSectionTextInputValue={setSectionTextInputValue}
            addSectionHandler={addNewSection}
            removeSectionHandler={removeSection}
            error={handleShowErrors("sections")}
          />
          <CustomItemModalActivate onSwitchPress={() => setCustomItemValue("isActive", !newCustomItem.isActive)} switchValue={newCustomItem.isActive} />
          <CustomItemModalActionButtons
            isDisabled={shouldDisableActionButton}
            onActionHandler={actionBtnHandler}
            buttonText={actionBtnText}
            onRemoveHandler={() => handleDeleteCallback(newCustomItem, setCustomItems, navigation)}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}
