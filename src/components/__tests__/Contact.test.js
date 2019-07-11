import React from 'react'
import { shallow } from 'enzyme'
import Contact from '../Contact'

describe("Contact", () => {
  let mountedContact

  it("renders without crashing", () => {
    mountedContact = shallow(<Contact />)
  })

  it("renders 2 links", () => {
    let links = mountedContact.find("a")
    expect(links.length).toBe(2)
  })
})