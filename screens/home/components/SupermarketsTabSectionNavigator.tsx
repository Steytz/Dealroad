import React, {FC, useState} from "react"
import {View, ViewStyle} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import WebView from "react-native-webview"
import SectionsTabBar from "./SectionsTabBar"
import {palette} from "../../../theme/palette"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
}

const SContainer: ViewStyle = {
  flex: 1,
  backgroundColor: palette.white,
}

const SupermarketsTabSectionNavigator: FC<Props> = ({sections}) => {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <View style={SContainer}>
      <SectionsTabBar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <WebView originWhitelist={["*"]} source={{uri: activeSection.url}} />
    </View>
  )
}

export default SupermarketsTabSectionNavigator
