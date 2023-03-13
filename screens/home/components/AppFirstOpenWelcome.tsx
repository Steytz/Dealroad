import React, {Dispatch, FC, SetStateAction, useCallback} from "react"
import {Pressable, TextStyle, ViewStyle} from "react-native"
import SupermarketSelectionWidget from "./SupermarketSelectionWidget"
import {palette} from "../../../theme/palette"
import Container from "../../../global-components/container/Container"
import Text from "../../../global-components/text/Text"
import DarkModeButton from "./DarkModeButton"
import spacing from "../../../theme/spacing"

interface Props {
  setHasAppBeenOpened: Dispatch<SetStateAction<boolean | undefined>>
}

const SWelcomeHeader: TextStyle = {
  color: palette.orange,
  fontWeight: "bold",
  fontSize: 24,
  marginTop: spacing[4],
}
const SWelcomeSubText: TextStyle = {
  fontSize: 18,
  marginTop: spacing[1],
}
const SDoneBtn: ViewStyle = {
  backgroundColor: palette.orange,
  alignSelf: "center",
  paddingHorizontal: 35,
  paddingVertical: spacing[0],
  borderRadius: 15,
  marginTop: spacing[5],
}
const SDoneBtnText: TextStyle = {
  color: palette.black,
  fontSize: 18,
  fontWeight: "500",
}

const SDarkModeButton: ViewStyle = {
  position: "absolute",
  top: 20,
  right: 20,
}

const AppFirstOpenWelcome: FC<Props> = ({setHasAppBeenOpened}) => {
  const handleDonePress = useCallback(() => {
    setHasAppBeenOpened(true)
  }, [])

  return (
    <Container>
      <Text style={SWelcomeHeader} text={"Welcome to Dealroad,\nnever buy expensive\ngroceries again."} />
      <Text style={SWelcomeSubText} text={"Please add some supermarkets from\nour supported list."} />
      <SupermarketSelectionWidget />
      <Pressable onPress={handleDonePress} style={SDoneBtn}>
        <Text style={SDoneBtnText} text="Done" />
      </Pressable>
      <DarkModeButton buttonStyle={SDarkModeButton} />
    </Container>
  )
}

export default AppFirstOpenWelcome
