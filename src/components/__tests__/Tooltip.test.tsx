import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tooltip } from '../Tooltip'

afterEach(cleanup)

describe('Tooltip', () => {
  test('should render text inside tooltip', () => {
    const text = 'Hello, World!'
    render(
      <Tooltip title={text}>
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveTextContent(text)
  })

  test("should render with 'top' class as position default", () => {
    render(
      <Tooltip title="Test">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('top')
  })

  test("should render with 'bottom' class when passed 'bottom' position", () => {
    render(
      <Tooltip title="Test" position="bottom">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('bottom')
  })

  test("should render with 'left' class when passed 'left' position", () => {
    render(
      <Tooltip title="Test" position="left">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('left')
  })

  test("should render with 'right' class when passed 'right' position", () => {
    render(
      <Tooltip title="Test" position="right">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('right')
  })
})
