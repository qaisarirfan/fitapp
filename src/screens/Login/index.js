import React, {useState} from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native"
import flow from "lodash/flow"
import isEqual from "lodash/isEqual"
import PropTypes from "prop-types"
import {useRoute} from "@react-navigation/native"

import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {Formik} from "formik"
import * as Yup from "yup"
import {HeaderBar} from "../../components/HeaderBar"

import {Logo} from "../../components/Logo"
import Tooltip from "../../components/Tooltip"
import themeStyles from "./styles"
import connect from "./connect"

// Login Component content
export const Login = ({login}) => {
  const styles = themeStyles()
  const {name} = useRoute()

  const [loader, setLoader] = useState(false)

  const sleep = (duration) =>
    new Promise((resolve) => setTimeout(() => resolve(), duration))

  return (
    <View style={styles.root} testID="login_screen">
      <HeaderBar isHeaderShow={false} title={name} />
      <KeyboardAwareScrollView
        scrollEnabled
        behavior="padding"
        style={styles.container}
        contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Logo />
          <Text style={styles.welcomeBack}>Welcome back!</Text>
          <Formik
            initialValues={{email: "", password: ""}}
            validationSchema={Yup.object().shape({
              email: Yup.string().email("Invalid email").required("Required"),
              password: Yup.string().required("Required"),
            })}
            onSubmit={(values) => {
              const loginFakeData = {
                email: "admin@admin.com",
                password: "admin",
              }
              if (isEqual(values, loginFakeData)) {
                setLoader(true)
                sleep(5000).then(() => {
                  login()
                  setLoader(false)
                })
              } else {
                Alert.alert(
                  "Error",
                  "The email address that you've entered doesn't match any account.",
                  [
                    {
                      text: "OK",
                      onPress: () => console.log("OK Pressed"),
                      testID: "alert",
                    },
                  ]
                )
              }
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.inputContainer}>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={"#fff"}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    testID="email"
                  />
                  {touched.email && errors.email ? (
                    <Text>{errors.email}</Text>
                  ) : null}
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={"#fff"}
                    autoCapitalize="none"
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    testID="password"
                  />
                  {touched.password && errors.password ? (
                    <Text>{errors.password}</Text>
                  ) : null}
                </View>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleSubmit}
                  testID="submit">
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                {loader ? <ActivityIndicator color="#fff" /> : null}
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

// Login Proptypes
Login.propTypes = {
  login: PropTypes.func.isRequired,
}

// Login Default props
Login.defaultProps = {}

export default flow([connect])(Login)
