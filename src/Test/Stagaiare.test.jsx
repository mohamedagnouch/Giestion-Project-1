import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Stagaire from "../Components/Stagaiare";


Enzyme.configure({ adapter: new Adapter() });
describe("Test Case For App", () => {
  it("should render Link", () => {
    const wrapper = shallow(<Stagaire />);
    const buttonElement = wrapper.find("#LinkTest");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Link Test");
  });
});
