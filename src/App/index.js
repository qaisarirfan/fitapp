import React, {useEffect} from "react"
import RNBootSplash from "react-native-bootsplash"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import flow from "lodash/flow"
import PropTypes from "prop-types"

import Login from "../screens/Login"
import Home from "../screens/Home"
import connect from "./connect"

const OptionsStack = () => {
  const Stack = createStackNavigator()
  return <Stack.Navigator screenOptions={{headerShown: false}} />
}

const App = ({isLoggedin}) => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250})
  }, [])

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedin ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Options" component={OptionsStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// App Proptypes
App.propTypes = {
  isLoggedin: PropTypes.bool,
}

// App Default props
App.defaultProps = {
  isLoggedin: false,
}

export default flow([connect])(App)
