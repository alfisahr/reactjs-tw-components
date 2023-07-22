import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Input, Button } from '../src'

describe('Common render Input Component', () => {
  it('renders without crashing', () => {
    render(<Input />)
  })
})

describe('Common render Button Component', () => {
  it('renders without crashing', () => {
    render(<Button>Sample Button</Button>)
  })
})
