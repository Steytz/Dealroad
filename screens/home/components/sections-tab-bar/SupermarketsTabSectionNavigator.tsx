import React, {FC, useState} from "react"
import {ViewStyle} from "react-native"
import {Container} from "@generalComps"
import {TSupportedSupermarketsElementSection} from "../.."
import SectionsTabBar from "./SectionsTabBar"
import SupermarketsWebview from "../supermarket-tab-navigator/SupermarketsWebview"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
}

const SContainer: ViewStyle = {
  paddingHorizontal: 0,
}

const SupermarketsTabSectionNavigator: FC<Props> = ({sections}) => {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <Container style={SContainer}>
      <SectionsTabBar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <SupermarketsWebview uri={activeSection.url} />
    </Container>
  )
}

export default SupermarketsTabSectionNavigator
