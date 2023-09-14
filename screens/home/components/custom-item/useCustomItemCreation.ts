import {TCustomItem, useItemsContext} from "@contexts"
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {TMainStack} from "../../../../navigation/MainNavigator"
import {useCallback, useEffect, useMemo, useState} from "react"
import {supportedSupermarkets, TItemsElementSection} from "@screens"
import {defaultSection} from "./CustomItemModalSections"
import {updateObjectArrayItem} from "@utils"
import {handleUrlValidation} from "./handleUrlValidation"
import {generateUUID} from "./generateUUID"

type TErrorsMap = {[key in keyof Partial<TCustomItem>]: string}

const defaultCustomItem: TCustomItem = {
  logo: "",
  sections: [defaultSection],
  isActive: false,
  displayName: "",
  id: generateUUID(),
}

export const useCustomItemCreation = () => {
  const {setCustomItems, customItems} = useItemsContext()
  const navigation = useNavigation<NativeStackNavigationProp<TMainStack>>()
  const route = useRoute<RouteProp<TMainStack, "CustomItemModal">>()
  const {customItemToEdit} = route.params
  const [errors, setErrors] = useState<TErrorsMap>({})
  const [showErrors, setShowErrors] = useState<boolean>(false)
  const [newCustomItem, setNewCustomItem] = useState<TCustomItem>(customItemToEdit || defaultCustomItem)

  const hasErrors = Object.entries(errors).length > 0

  const setCustomItemValue = useCallback((keyToModify: keyof TCustomItem, value: string | boolean) => {
    setNewCustomItem(prev => {
      return {...prev, [keyToModify]: value}
    })
  }, [])

  const setSectionTextInputValue = useCallback((keyToModify: keyof TItemsElementSection, text: string, sectionIndex: number) => {
    setNewCustomItem(prev => {
      const newSectionsArr = [...prev.sections]
      newSectionsArr[sectionIndex] = {...newSectionsArr[sectionIndex], [keyToModify]: text}
      return {...prev, sections: newSectionsArr}
    })
  }, [])

  const addNewSection = useCallback(() => {
    setNewCustomItem(prev => {
      return {...prev, sections: [...prev.sections, defaultSection]}
    })
  }, [])

  const removeSection = useCallback((sectionIndex: number) => {
    setNewCustomItem(prev => {
      const updatedSectionsArray = prev.sections.filter((section, index) => index !== sectionIndex)
      return {...prev, sections: updatedSectionsArray}
    })
  }, [])

  const handleOnSave = useCallback(async () => {
    if (hasErrors) return setShowErrors(true)

    await updateObjectArrayItem({keyToUpdate: "customItems", mode: "add", itemForOperation: newCustomItem})

    setCustomItems(prev => [...prev, newCustomItem])
    return navigation.goBack()
  }, [hasErrors, newCustomItem, navigation])

  const handleOnEdit = useCallback(async () => {
    if (hasErrors) return setShowErrors(true)

    await updateObjectArrayItem({keyToUpdate: "customItems", mode: "update", itemForOperation: newCustomItem, identifier: "id"})

    setCustomItems(prev => {
      const updatedArr = [...prev]
      const itemIndex = updatedArr.findIndex(item => item.id === newCustomItem.id)
      if (itemIndex === -1) return prev
      updatedArr.splice(itemIndex, 1, newCustomItem)
      return updatedArr
    })
    return navigation.goBack()
  }, [hasErrors, newCustomItem, navigation])

  const handleDeleteError = useCallback((keyToDelete: keyof TErrorsMap) => {
    setErrors(prev => {
      if (!prev[keyToDelete]) {
        return prev
      }
      delete prev[keyToDelete]
      return {...prev}
    })
  }, [])

  const handleAddError = useCallback((keyToAdd: keyof TErrorsMap, errorString: string) => {
    setErrors(prev => ({...prev, [keyToAdd]: errorString}))
  }, [])

  const handlePreValidateNonSectionKey = useCallback(
    (keyToValidate: keyof TErrorsMap, errorsToValidateList: {error: string; validation: boolean}[]) => {
      const errorItem = errorsToValidateList.find(errorsToValidate => errorsToValidate.validation)
      if (!errorItem) return handleDeleteError(keyToValidate)
      return handleAddError(keyToValidate, errorItem?.error)
    },
    [handleAddError, handleDeleteError],
  )

  const handleValidateDisplayName = useCallback(() => {
    const isInSupportedSupermarkets = Object.keys(supportedSupermarkets).some(supportedSupermarket => supportedSupermarket === newCustomItem.displayName)
    const isInCustomItems = customItems.some(csItem => csItem.id !== newCustomItem.id && csItem.displayName === newCustomItem.displayName)
    const isDisplayNameNotUnique = isInSupportedSupermarkets || isInCustomItems

    handlePreValidateNonSectionKey("displayName", [
      {error: "(Display name is empty)", validation: !newCustomItem.displayName},
      {error: "(Display name is not unique)", validation: isDisplayNameNotUnique},
    ])
  }, [customItems, supportedSupermarkets, newCustomItem.displayName])

  const handlePreValidateSectionInput = useCallback(() => {
    const isAnySectionMissingUrl = newCustomItem.sections.some(section => !section.url)
    const isAnySectionMissingTitle = newCustomItem.sections.some(section => !section.title)
    const doesAnySectionHaveInvalidUrl = newCustomItem.sections.some(section => !handleUrlValidation(section.url))
    const isAnySectionTitleInSupportedSupermarkets = newCustomItem.sections.some(section => new Set(Object.keys(supportedSupermarkets)).has(section.title))

    const isAnySectionTitleInCustomItems = newCustomItem.sections.some(section => {
      return customItems.some(csItem => csItem.id !== newCustomItem.id && csItem.displayName === section.title)
    })

    const isAnySectionTitleInCustomItemsSections = newCustomItem.sections.some(section => {
      return customItems.some(csItem => {
        return csItem.sections.some(csItemSection => csItem.id !== newCustomItem.id && csItemSection.title === section.title)
      })
    })

    const checkIsAnySectionTitleInAnyCurrentCreatedSection = () => {
      const seen = new Set()
      for (const section of newCustomItem.sections) {
        if (seen.has(section.title)) return true
        seen.add(section.title)
      }
      return false
    }

    const isSectionTitleNotUnique =
      isAnySectionTitleInSupportedSupermarkets || isAnySectionTitleInCustomItems || isAnySectionTitleInCustomItemsSections || checkIsAnySectionTitleInAnyCurrentCreatedSection()

    const hasMoreThanOneSection = newCustomItem.sections.length > 1

    if (!isAnySectionMissingTitle && !isAnySectionMissingUrl && !doesAnySectionHaveInvalidUrl && !isSectionTitleNotUnique) {
      return handleDeleteError("sections")
    }

    if (isAnySectionMissingTitle && isAnySectionMissingUrl) {
      const errorText = hasMoreThanOneSection ? "One or more sections has an empty url and title" : "Url and title are empty"
      return handleAddError("sections", `(${errorText})`)
    }

    if (isAnySectionMissingTitle) {
      const errorText = hasMoreThanOneSection ? "One or more sections has an empty title" : "title is empty"
      return handleAddError("sections", `(${errorText})`)
    }

    if (isAnySectionMissingUrl) {
      const errorText = hasMoreThanOneSection ? "One or more sections has an empty url" : "url is empty"
      return handleAddError("sections", `(${errorText})`)
    }

    if (doesAnySectionHaveInvalidUrl) {
      const errorText = hasMoreThanOneSection ? "One or more sections has an invalid url" : "url is invalid"
      return handleAddError("sections", `(${errorText})`)
    }

    if (isSectionTitleNotUnique) {
      const errorText = hasMoreThanOneSection ? "One or more section's title is not unique, make sure the title is unique" : "title is not unique"
      return handleAddError("sections", `(${errorText})`)
    }
  }, [handleAddError, handleDeleteError, newCustomItem.sections])

  const handleShowErrors = useCallback(
    (keyToShowError: keyof TErrorsMap) => {
      return showErrors ? errors[keyToShowError] : undefined
    },
    [errors, showErrors],
  )

  useEffect(handleValidateDisplayName, [handleValidateDisplayName])

  useEffect(() => {
    handlePreValidateNonSectionKey("logo", [{error: "(No icon was selected)", validation: !newCustomItem.logo}])
  }, [handlePreValidateNonSectionKey, newCustomItem.logo])

  useEffect(handlePreValidateSectionInput, [handlePreValidateSectionInput])

  const shouldDisableActionButton = showErrors && hasErrors

  const actionBtnHandler = useMemo(() => (customItemToEdit ? handleOnEdit : handleOnSave), [customItemToEdit, handleOnEdit, handleOnSave])
  const actionBtnText: "Edit" | "Save" = customItemToEdit ? "Edit" : "Save"

  return {
    newCustomItem,
    setCustomItems,
    setCustomItemValue,
    handleShowErrors,
    setSectionTextInputValue,
    addNewSection,
    removeSection,
    shouldDisableActionButton,
    actionBtnHandler,
    actionBtnText,
    navigation,
  }
}
