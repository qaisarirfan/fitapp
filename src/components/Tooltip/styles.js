import {StyleSheet} from "react-native"

// Tooltip: Styling here
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    position: "absolute",
    bottom: "120%",
    left: 0,
    right: 0,
    marginHorizontal: 12,
    borderRadius: 5,
  },
  message: {
    padding: 12,
    color: "#fff",
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(0, 0, 0, 0.9)",
    transform: [{rotate: "180deg"}],
    position: "absolute",
    top: "100%",
    left: 12,
  },
})

export default styles
