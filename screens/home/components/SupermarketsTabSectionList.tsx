import React, {FC} from "react"
import {FlatList, ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import SupermarketsTabSectionListRenderItem from "./SupermarketsTabSectionListRenderItem"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
}

const SList: ViewStyle = {
  flex: 1,
}

const SupermarketsTabSectionList: FC<Props> = ({sections}) => {
  return (
    <FlatList
      keyExtractor={({title}) => title}
      scrollEventThrottle={16}
      contentContainerStyle={SList}
      data={sections}
      renderItem={({item}) => <SupermarketsTabSectionListRenderItem section={item} />}
    />
  )
}

export default SupermarketsTabSectionList
