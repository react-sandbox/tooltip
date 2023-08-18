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

  test('should render top position attribute as default', () => {
    render(
      <Tooltip title="Test">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'top')
  })

  test('should render bottom position attribute when given position', () => {
    render(
      <Tooltip title="Test" position="bottom">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'bottom')
  })

  test('should render left position attribute when given position', () => {
    render(
      <Tooltip title="Test" position="left">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'left')
  })

  test('should render right position attribute when given position', () => {
    render(
      <Tooltip title="Test" position="right">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-position', 'right')
  })

  test('should render transition delay attribute of 200 as default', () => {
    render(
      <Tooltip title="Test">
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-delay', '200')
  })

  test('should render transition delay attribute of 500 when given delay', () => {
    render(
      <Tooltip title="Test" delay={500}>
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveAttribute('data-delay', '500')
  })

  test('should render disabled attribute when given boolean', () => {
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

  test('should render inline styles when given style', () => {
    render(
      <Tooltip title="Test" style={{ background: 'blue' }}>
        <button>Test</button>
      </Tooltip>
    )
    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveStyle({ background: 'blue' })
  })
})
