import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Adduser from "../Components/Stagaire/AddStagiare";

Enzyme.configure({ adapter: new Adapter() });
describe("Test Case For App", () => {
  it("should render button", () => {
    const wrapper = shallow(<Adduser />);
    const buttonElement = wrapper.find("#AddS");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Add S");
  });
});