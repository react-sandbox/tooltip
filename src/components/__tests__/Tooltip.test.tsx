import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tooltip from '../Tooltip'

afterEach(cleanup)

describe('Tooltip', () => {
  test('should render title as text inside tooltip', () => {
    const text = 'Hello, World!'
    render(
      <Tooltip title={text}>
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveTextContent(text)
  })

  test('should render with top position as default', () => {
    render(
      <Tooltip title="Test">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'top')
  })

  test('should render with bottom position when given position', () => {
    render(
      <Tooltip title="Test" position="bottom">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'bottom')
  })

  test('should render with left position when given position', () => {
    render(
      <Tooltip title="Test" position="left">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'left')
  })

  test('should render with right position when given position', () => {
    render(
      <Tooltip title="Test" position="right">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'right')
  })

  test('should render with transition delay of 200 as default', () => {
    render(
      <Tooltip title="Test">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-delay', '200')
  })

  test('should render with transition delay of 500 when given delay', () => {
    render(
      <Tooltip title="Test" delay={500}>
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-delay', '500')
  })

  test('should render disabled when given disabled', () => {
    render(
      <Tooltip title="Test" disabled>
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-disabled', 'true')
  })

  test('should render classes when given className', () => {
    render(
      <Tooltip title="Test" className="text-md text-green-500">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveClass('text-md text-green-500')
  })
})
