import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe("Navbar", () => {
  let mountedNavbar;

  beforeEach(() => {
    mountedNavbar = shallow(<Navbar />);
  })

  it("renders without crashing", () => {
    mountedNavbar = shallow(<Navbar />);
  })

  it("renders 6 links", () => {
    let links = mountedNavbar.find('a');
    expect(links.length).toBe(6);
  })

  it("renders the logo", () => {
    let logo = mountedNavbar.find('img');
    expect(logo.length).toBe(1);
  })
})