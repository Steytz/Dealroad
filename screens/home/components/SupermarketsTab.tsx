import React, {FC, memo} from "react"
import {View} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import WebView from "react-native-webview"
import SupermarketsTabSectionNavigator from "./SupermarketsTabSectionNavigator"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
}

const SupermarketsTab: FC<Props> = ({sections}) => {
  return (
    <View style={{flex: 1}}>
      {sections.length > 1 ? (
        <SupermarketsTabSectionNavigator sections={sections} />
      ) : (
        <WebView originWhitelist={["*"]} source={{uri: sections[0].url}} />
      )}
    </View>
  )
}

export default memo(SupermarketsTab)
