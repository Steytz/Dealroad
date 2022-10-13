import React, {Dispatch, FC, memo, SetStateAction, useCallback, useRef} from "react"
import {FlatList, View, ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import SectionsTabBarRenderItem from "./SectionsTabBarRenderItem"
import spacing from "../../../theme/spacing"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
  setActiveSection: Dispatch<SetStateAction<TSupportedSupermarketsElementSection>>
  activeSection: TSupportedSupermarketsElementSection
}

const STabBarContainer: ViewStyle = {
  flex: 0,
  marginVertical: spacing[0] + 3,
}

const SectionsTabBar: FC<Props> = ({sections, activeSection, setActiveSection}) => {
  const listRef = useRef(null)

  const handleScrollToIndex = useCallback((index: number) => {
    // @ts-ignore
    listRef.current.scrollToIndex({animated: true, index: index, viewPosition: 0.5})
  }, [])

  return (
    <View style={STabBarContainer}>
      <FlatList
        ref={listRef}
        keyExtractor={item => item.title}
        horizontal
        data={sections}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <SectionsTabBarRenderItem
            section={item}
            setActiveSection={setActiveSection}
            isFocused={item.title === activeSection.title}
            handleScrollToIndex={() => handleScrollToIndex(index)}
          />
        )}
      />
    </View>
  )
}

export default memo(SectionsTabBar)
