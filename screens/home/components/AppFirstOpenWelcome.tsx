import React, {Dispatch, FC, SetStateAction} from "react"
import {Pressable, Text, TextStyle, View, ViewStyle} from "react-native"
import SupermarketSelectionWidget from "./SupermarketSelectionWidget"

interface Props {
  setHasAppBeenOpened: Dispatch<SetStateAction<boolean | undefined>>
  setSupermarkets: Dispatch<SetStateAction<string[]>>
}

const SContainer: ViewStyle = {}
const SWelcomeHeader: TextStyle = {}
const SWelcomeSubText: TextStyle = {}
const SDoneBtn: ViewStyle = {}
const SDoneBtnText: TextStyle = {}

const AppFirstOpenWelcome: FC<Props> = ({setHasAppBeenOpened, setSupermarkets}) => {
  return (
    <View style={SContainer}>
      <Text style={SWelcomeHeader}>Welcome to Dealroad,{"\n"}never buy expensive groceries again.</Text>
      <Text style={SWelcomeSubText}>Please add some supermarkets from our supported list.</Text>
      <SupermarketSelectionWidget setSupermarkets={setSupermarkets} />
      <Pressable onPress={() => setHasAppBeenOpened(true)} style={SDoneBtn}>
        <Text style={SDoneBtnText}>Done</Text>
      </Pressable>
    </View>
  )
}

export default AppFirstOpenWelcome
