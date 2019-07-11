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

  it("renders a title", () => {
    let title = mountedProject.find("h2");
    expect(title.length).toBe(1);
  })

  it("renders a thumbnail", () => {
    let thumbnail = mountedProject.find("img");
    expect(thumbnail.length).toBe(1);
  })

  it("renders 2 links", () => {
    let links = mountedProject.find("a");
    expect(links.length).toBe(2);
  })

})