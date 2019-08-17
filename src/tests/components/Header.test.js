import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Header from '../../components/Header'

test(`Should render Header correctly`, () => {
  const wrapper = shallow(<Header />)
  expect(toJson(wrapper)).toMatchSnapshot()
  // expect(wrapper.find(`h1`).text()).toEqual(`Expensify`)
  // const renderer = new ShallowRenderer()
  // renderer.render(<Header />)

  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
