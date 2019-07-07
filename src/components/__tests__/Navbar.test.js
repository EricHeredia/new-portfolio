import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe("Navbar", () => {
  let mountedNavbar;

  beforeEach(() => {
    mountedNavbar = shallow(<Navbar />);
  })

  it("renders without crashing", () => {
    let mountedNavbar = shallow(<Navbar />);
  })
})