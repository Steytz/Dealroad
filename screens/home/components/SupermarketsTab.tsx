import React, {FC, memo} from "react"
import {View} from "react-native"
import {TSupportedSupermarketsElementSection} from "../supportedSupermarkets"
import WebView from "react-native-webview"
import SupermarketsTabSectionList from "./SupermarketsTabSectionList"

interface Props {
  sections: TSupportedSupermarketsElementSection[]
}

const SupermarketsTab: FC<Props> = ({sections}) => {
  if (sections.length > 1) return <SupermarketsTabSectionList sections={sections} />

  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: sections[0].url}} />
    </View>
  )
}

export default memo(SupermarketsTab)
