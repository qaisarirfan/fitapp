import {Dimensions, StyleSheet} from "react-native"

const screen = Dimensions.get("window")

// Logo: Styling here
const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  logo: {
    width: screen.width * 0.8,
    height: screen.width * 0.8,
  },
})

export default styles
