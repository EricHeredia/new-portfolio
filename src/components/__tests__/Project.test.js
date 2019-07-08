import React from 'react';
import { shallow } from 'enzyme';
import Project from '../Project';

describe("Project", () => {
  let mountedProject;

  beforeEach(() => {
    mountedProject = shallow(<Project />);
  })

  it("renders without crashing", () => {
    mountedProject = shallow(<Project />);
  })

})