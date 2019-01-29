import * as React from 'react'
import Enzyme from 'enzyme'
import App from './App'

it('renders the correct text when no effort level is giver', () => {
  const hello = Enzyme.shallow(<App name='Luis' />)
  expect(hello.find('h1').text()).toEqual('Hello Luis!')
})
it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = Enzyme.shallow(<App name='Luis' effort={1} />)
  expect(hello.find('h1').text()).toEqual('Hello Luis!')
})

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = Enzyme.shallow(<App name='Luis' effort={5} />)
  expect(hello.find('h1').text()).toEqual('Hello Luis!!!!!')
})

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    Enzyme.shallow(<App name='Luis' effort={0} />)
  }).toThrow()
})

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    Enzyme.shallow(<App name='Luis' effort={-1} />)
  }).toThrow()
})
