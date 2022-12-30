import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Edit from "../Components/Edit";

Enzyme.configure({ adapter: new Adapter() });
describe("Test Case For App", () => {
  it("should render button", () => {
    const wrapper = shallow(<Edit />);
    const buttonElement = wrapper.find("#ClickUpdate");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Click Update");
  });
});