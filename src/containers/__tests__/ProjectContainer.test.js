import React from 'react';
import { shallow } from 'enzyme';
import ProjectContainer from '../ProjectContainer';

describe("ProjectContainer", () => {
  let mountedProjectContainer;

  beforeEach(() => {
    mountedProjectContainer = shallow(<ProjectContainer />);
  })

  it("renders without crashing", () => {
    mountedProjectContainer = shallow(<ProjectContainer />);
  })

})