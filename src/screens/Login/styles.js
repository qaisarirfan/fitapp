import Color from "color"
import {Dimensions, StyleSheet} from "react-native"

const screen = Dimensions.get("window")

// Login: Styling here
const styles = () => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "#2ecc71",
    },
    container: {},
    content: {
      paddingTop: screen.height * 0.04,
    },
    welcomeBack: {
      fontSize: 44,
      color: "rgb(255, 255, 255)",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Roboto",
    },

    inputContainer: {},
    input: {
      padding: 14,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 24,
      // color: Color(theme.A700).darken(0.6).hex(),
      backgroundColor: "transparent",
      // marginVertical: 10,
      flexDirection: "row",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "#ffffff",
      textAlign: "center",
      color: "rgb(255, 255, 255)",
    },
    submitButton: {
      backgroundColor: "#fff",
      margin: 30,
      alignItems: "center",
      borderRadius: 30,
      overflow: "hidden",
    },
    submitButtonText: {
      color: "#2ecc71",
      fontSize: 18,
      padding: 10,
      paddingBottom: 16,
      paddingTop: 16,
    },
  })
}
export default styles
