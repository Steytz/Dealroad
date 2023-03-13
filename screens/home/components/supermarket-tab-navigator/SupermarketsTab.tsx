import React, {FC, memo} from "react"
import {ViewStyle} from "react-native"
import SectionsTabNavigator from "../sections-tab-bar/SectionsTabNavigator"
import {Container} from "@generalComps"
import {TSupportedSupermarketsElementSection} from "../../supportedSupermarkets"
import SupermarketsWebview from "./SupermarketsWebview"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
}

const SCustomContainer: ViewStyle = {
  paddingHorizontal: 0,
}

const SupermarketsTab: FC<Props> = ({sections}) => {
  return (
    <Container style={SCustomContainer}>
      {sections.length > 1 ? (
        <SectionsTabNavigator sections={sections} />
      ) : (
        <SupermarketsWebview uri={sections[0].url} />
      )}
    </Container>
  )
}

export default memo(SupermarketsTab)