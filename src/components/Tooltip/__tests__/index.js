import React from "react"
import renderer from "react-test-renderer"
import Tooltip from ".."

const createProps = () => ({
  classes: {},
})

describe("<Tooltip />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<Tooltip {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
