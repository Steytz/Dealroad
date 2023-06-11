import React, {FC, memo} from "react"
import {ViewStyle} from "react-native"
import SectionsTabNavigator from "../sections-tab-bar/SectionsTabNavigator"
import {Container} from "@generalComps"
import {TSupportedSupermarketsElementSection} from "../../supportedSupermarkets"
import SupermarketsWebview from "./SupermarketsWebview"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
  optimized: boolean
}

const SCustomContainer: ViewStyle = {
  paddingHorizontal: 0,
}

const SupermarketsTab: FC<Props> = ({sections, optimized}) => {
  return (
    <Container style={SCustomContainer}>
      {sections.length > 1 ? (
        <SectionsTabNavigator sections={sections} optimized={optimized} />
      ) : (
        <SupermarketsWebview
          uri={sections[0].url}
          selectorRemoveList={sections[0].selectorsToRemove}
          optimized={optimized}
        />
      )}
    </Container>
  )
}

export default memo(SupermarketsTab)
