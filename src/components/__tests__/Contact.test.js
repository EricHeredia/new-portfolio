import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact';

describe("Contact", () => {
  let mountedContact;

  it("renders without crashing", () => {
    mountedContact = shallow(<Contact />);
  })
})