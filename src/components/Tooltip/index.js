import React from "react"
import {View, Text} from "react-native"
import PropTypes from "prop-types"
import styles from "./styles"

// Tooltip Component content
export const Tooltip = ({message}) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
    <View style={styles.arrow} />
  </View>
)

// Tooltip Proptypes
Tooltip.propTypes = {
  message: PropTypes.string,
}

// Tooltip Default props
Tooltip.defaultProps = {
  message: "",
}

export default Tooltip
