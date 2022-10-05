import React, {Dispatch, FC, SetStateAction} from "react"
import {Pressable, Text, TextStyle, View, ViewStyle} from "react-native"
import SupermarketSelectionWidget from "./SupermarketSelectionWidget"
import {palette} from "../../../theme/palette"

interface Props {
  setHasAppBeenOpened: Dispatch<SetStateAction<boolean | undefined>>
}

const SContainer: ViewStyle = {
  paddingHorizontal: 14,
  backgroundColor: palette.white,
  flex: 1,
}
const SWelcomeHeader: TextStyle = {
  color: palette.orange,
  fontWeight: "bold",
  fontSize: 24,
  marginTop: 35,
}
const SWelcomeSubText: TextStyle = {
  color: palette.black,
  fontSize: 18,
  marginTop: 14,
}
const SDoneBtn: ViewStyle = {
  backgroundColor: palette.orange,
  alignSelf: "center",
  paddingHorizontal: 35,
  paddingVertical: 7,
  borderRadius: 15,
  marginTop: 42,
}
const SDoneBtnText: TextStyle = {
  color: palette.black,
  fontSize: 18,
  fontWeight: "500",
}

const AppFirstOpenWelcome: FC<Props> = ({setHasAppBeenOpened}) => {
  return (
    <View style={SContainer}>
      <Text style={SWelcomeHeader}>
        Welcome to Dealroad,{"\n"}never buy expensive{"\n"}groceries again.
      </Text>
      <Text style={SWelcomeSubText}>Please add some supermarkets from{"\n"}our supported list.</Text>
      <SupermarketSelectionWidget />
      <Pressable onPress={() => setHasAppBeenOpened(true)} style={SDoneBtn}>
        <Text style={SDoneBtnText}>Done</Text>
      </Pressable>
    </View>
  )
}

export default AppFirstOpenWelcome
