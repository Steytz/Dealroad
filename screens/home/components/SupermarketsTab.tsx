import React, {FC, memo} from "react"
import {ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import SupermarketsTabSectionNavigator from "./SupermarketsTabSectionNavigator"
import Container from "../../../global-components/Container/Container"
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
        <SupermarketsTabSectionNavigator sections={sections} />
      ) : (
        <SupermarketsWebview uri={sections[0].url} />
      )}
    </Container>
  )
}

export default memo(SupermarketsTab)
