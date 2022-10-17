import React, {FC, useState} from "react"
import {ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import SectionsTabBar from "./SectionsTabBar"
import Container from "../../../global-components/container/Container"
import SupermarketsWebview from "./SupermarketsWebview"

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
