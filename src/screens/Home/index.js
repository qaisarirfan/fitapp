import React from "react"
import {View, TouchableOpacity} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import PropTypes from "prop-types"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

import HeaderBar from "../../components/HeaderBar"
import themeStyles from "./styles"

// Home Component content
export const Home = () => {
  const styles = themeStyles()

  return (
    <View style={styles.root} testID="welcome">
      <HeaderBar
        title="Home"
        isHeaderShow={false}
        rightContent={
          <TouchableOpacity testID="options_screen_button">
            <Entypo name="cog" size={32} color="#fff" />
          </TouchableOpacity>
        }
      />
      <KeyboardAwareScrollView
        testID="home_screen"
        scrollEnabled
        behavior="padding">
        <View style={styles.content} />
      </KeyboardAwareScrollView>
    </View>
  )
}

// Home Proptypes
Home.propTypes = {}

// Home Default props
Home.defaultProps = {}

export default Home
