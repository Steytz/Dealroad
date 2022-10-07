import React, {Dispatch, FC, memo, SetStateAction, useCallback, useRef} from "react"
import {FlatList, View, ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import SectionsTabBarRenderItem from "./SectionsTabBarRenderItem"
import {palette} from "../../../theme/palette"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
  setActiveSection: Dispatch<SetStateAction<TSupportedSupermarketsElementSection>>
  activeSection: TSupportedSupermarketsElementSection
}

const STabBarContainer: ViewStyle = {
  flex: 0,
  backgroundColor: palette.white,
  marginTop: 7,
}

const SectionsTabBar: FC<Props> = ({sections, activeSection, setActiveSection}) => {
  const listRef = useRef(null)

  const handleScrollToIndex = useCallback(
    (index: number) => {
      // @ts-ignore
      listRef.current.scrollToIndex({animated: true, index: index, viewPosition: 0.5})
    },
    [sections],
  )

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
